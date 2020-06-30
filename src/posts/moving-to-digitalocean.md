---
dateModified: "2017-10-18 10:15"
datePublished: "2017-10-18 10:15"
disqusIdentifier: "59cfbaac613ac70679db193e"
excerpt: "The process of moving my website and Ghost blog from Heroku to DigitalOcean.  Provisioning up the server with Node.js, Nginx, LetsEncrypt and PM2."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/Moving_to_DigitalOcean.png"
title: "Moving to DigitalOcean"
---

Last weekend I've moved my website and blog to [**DigitalOcean**](https://www.digitalocean.com). **At the time** of **building** this **website** _2015_ I choosed [**Heroku**](https://heroku.com) as the platform to host my application, because I **didn't wanted** to **deal** with **server** **provisioning** and **maintenance**.

Heroku is probably the easiest way to ship your application into production 🚀. In my use case, the [GitHub repository](https://github.com/carloscuesta/carloscuesta.me) that hosts the code for my website, was connected to Heroku and magically I've managed to ship my application using continuous deployment through [Travis CI](https://travis-ci.org) and GitHub.

However I knew that I would be switching at some point to an _IaaS_ considering I would need more control over the infrastructure of my application.

### The problem

My website is a **Node.js** application built with [Express](http://expressjs.com), [Pug](http://pugjs.org) and SCSS. The blog runs on a self-hosted [Ghost](https://github.com/TryGhost/blog).

Since the start of using Heroku, I wanted to use a single [Dyno](https://devcenter.heroku.com/articles/dynos) to keep it simple. But every dyno is attatched to a process, so I managed to start Ghost as a module from the Express application. This workaround wasn't the best solution, but it worked more than a year and a half.

Recently, Ghost went out of beta and released the `1.0.0` with a ton of breaking changes. Since then it was nearly impossible with my needs to keep using Heroku.

### Switching to DigitalOcean

I decided to make the move considering it an opportunity to learn and improve my infrastructure.

> If you don't have a DigitalOcean account, use [this link to register](https://m.do.co/c/5347e65ea75c) and **get $10 for free!**

#### Requirements

- Single droplet.
- Basic security.
- SSL certificate using LetsEncrypt & Certbot with auto-renew.
- Independent blog and web applications through Nginx.

### Basic security

After spinning up a **5$ droplet**, the first thing I did was **disabling** **root login** and **password authentication**. That means only SSH can be used to connect to the server.

#### UFW

```language-shell
$ sudo ufw allow 'Nginx Full' && sudo ufw allow OpenSSH
$ sudo ufw enable && sudo ufw status

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```

### LetsEncrypt

When I was on **Heroku**, I used **Cloudflare** to obtain **SSL** 🔒. But **LetsEncrypt** **is** way **better**. Just because you get end to end encryption.

To get your SSL certificate, first, you need to install [certbot](https://certbot.eff.org).

```language-bash
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update && sudo apt-get install python-certbot-nginx
```

Then, open your Nginx configuration file find `server_name` directive and set your domain.

```language-bash
server_name example.com www.example.com;
```

Verify the configuration and if you have no errors, reload it.

```language-bash
$ sudo nginx -t
$ sudo systemctl reload nginx
```

Now it's time to **obtain** our **SSL certificates** for the domain specified at the Nginx config file.

```language-bash
$ sudo certbot --nginx -d example.com -d www.example.com
```

> ⚠️ Before obtaining the certs, you'll have to point the domain to your DigitalOcean IP. That's the way Certbot verifies that you control the domain you're requesting a certificate for.

If that's successful, certbot will ask how you'd like to configure your HTTPS. Finally the certificates will be downloaded, installed, and loaded.

#### Auto renewal

**LetsEncrypt certificates** are **only valid** for **ninety days**, however the Certbot cli includes an option to **renew** our **SSL** certificates and we can **automate** this process with a [crontab](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-on-a-vps).

```language-bash
$ sudo crontab -e
```

Add a new line inside the crontab file and save it. Basically you're asking to your server to run the `certbot renew --quiet` command every day at 04:00.

```language-bash
0 4 * * * /usr/bin/certbot renew --quiet
```

### Apps management

Both applications are started as a **daemon** on the **server**. So even though the server is restarted, automatically both apps will go up.

`carloscuesta.me`: Uses [PM2](http://pm2.keymetrics.io) – production process manager for Node.js.

`carloscuesta.me/blog`: Ghost uses [ghost-cli](https://github.com/TryGhost/blog-CLI) to update and run the blog.

### Nginx

I use **Nginx** as a **reverse proxy** against the applications that are running on `localhost`.

The first block of my configuration file, redirects all the requests to https.

```language-bash
server {
  listen         80;
  listen    [::]:80;
  server_name    carloscuesta.me www.carloscuesta.me;
  return         301 https://$server_name$request_uri;
}
```

After enforcing HTTPs, we use another server block to set our `locations`. Those locations will define how Nginx should handle the requests to specific resources.

As an example, if your make a request to `carloscuesta.me`, Nginx will match our `/` location and is going to *proxy_pass* the request to my `http://localhost:PORT` where the Node.js application is started.

Also, we're enabling **HTTP2** and **SSL** for our server, providing the certificates and keys needed.

```language-bash
server {
  listen 443 ssl http2 default_server;
  listen [::]:443 ssl http2 default_server;

  ssl_certificate ...;
  ssl_certificate_key ...;
  ssl_dhparam ...;

  server_name carloscuesta.me www.carloscuesta.me;

  location / {
    proxy_pass http://localhost:PORT;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $http_host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
  }

  location ^~ /blog {
     # Same as / with another port
  }
}
```
