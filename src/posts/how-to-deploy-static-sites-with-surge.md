---
dateModified: "2016-08-05 20:16"
datePublished: "2016-08-05 20:16"
disqusIdentifier: "14"
excerpt: "How to deploy static websites with surge, the most easy and simple way to deploy a static site, all from your terminal. Surge it's free."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1470405094/gaj6zuulfkujtcwonuiv.png"
title: "How to deploy Static Sites with Surge"
---

[Surge](http://surge.sh) is a **static web publishing** tool for the command line. It's the most **simple** and **easy** way to **deploy a static site** that I've ever seen!. Surge is free and includes a lot of [cool features](http://surge.sh/help/) out of the box. Just with a single command you will get your site deployed.

#### What do you need ?

* [Node.js](https://nodejs.org/en/) & [NPM](https://www.npmjs.com)
* Surge

#### Getting started

To install **Surge** just run:

```language-shell
$ npm i -g surge
```

After that you will need to create a surge account providing an email and password. Once you're registered and logged in, you can deploy a static site running `surge`

```language-shell
$ surge login
$ surge
```

You'll be asked for the **path or folder** you want to deploy and the **domain** for the project. You can [add a custom domain](http://surge.sh/help/adding-a-custom-domain) inplace of the surge.sh subdomain.

![Carlos Cuesta Deploy Surge](https://res.cloudinary.com/carloscuesta/image/upload/v1470403437/lwsxsmmkcouz18xhmoju.gif)
> **Success**! Project is published and running at [carloscuesta.surge.sh](http://carloscuesta.surge.sh)


Use the `list` command to get a to see every project you’ve published on Surge. To delete a site on Surge just run `teardown`

```language-shell
$ surge list
$ surge teardown
```

If you use [**Gulp**](http://gulpjs.com) or [**Grunt**](http://gruntjs.com), you can integrate Surge into your workflow with the existing plugins for [Gulp](https://github.com/surge-sh/gulp-surge) and [Grunt](https://github.com/surge-sh/grunt-surge).
