---
dateModified: "2016-01-21 16:10"
datePublished: "2016-01-21 16:10"
disqusIdentifier: "3"
excerpt: "Learn how to keep npm dependencies up to date from your terminal using npm outdated, npm-check-updates ncu or with web applications like libraries.io"
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1453840186/piym6jjmjkefij0quxmz.png"
title: "How to keep npm dependencies up to date"
---

If you maintain **open source** or personal projects, the **process** of **updating** and **finding** new **versions** for the **dependencies** used in them could be boring and time consuming.

There are good solutions to avoid the manual process.

![npm dependencies up to date](https://res.cloudinary.com/carloscuesta/image/upload/v1453840290/fuyhmakd4wt9lik6d9jp.png)

### Using npm

Out of the box [npm](http://npmjs.org) includes a command to check for outdated packages, without installing anything [`npm outdated`](https://docs.npmjs.com/cli/outdated)

```
$ npm outdated
```

### Using ncu

**npm-check-updates** is a command-line tool that allows you to upgrade your *package.json* dependencies to the latest versions, regardless of existing version constraints.

Install the package and run `ncu`

```
$ npm install -g npm-check-updates
$ ncu
```

### Using [libraries.io](https://libraries.io)

**Libraries.io** is a web application that monitors open source libraries it's useful when you have a project hosted on GitHub, it's *free for open source* projects and notifies you when there's a new release of a dependency that your project is using.
