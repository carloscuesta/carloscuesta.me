---
dateModified: "2019-10-01 22:15"
datePublished: "2019-10-01 22:15"
disqusIdentifier: "5bc9ff9949ac5006c0a84f00"
excerpt: "A guide to create JavaScript monorepos with Lerna and Yarn Workspaces. Explaining what is a monorepo, what are they useful for and how to create one with a code example"
image: "https://res.cloudinary.com/carloscuesta/image/upload/JavaScript-monorepos-with-Lerna-and-Yarn-Workspaces.png"
title: "JavaScript monorepos with Lerna and Yarn Workspaces"
---

### What is a monorepo ?

The monorepo term is a compound word between _"mono"_, from Ancient Greek [_"mónos"_](https://en.wiktionary.org/wiki/mono-#Etymology), that means _"single"_ and _"repo"_ as a shorthand of _"repository"_.

> A monorepo is a strategy for storing code and projects in a single repository.

### What are they useful for ?


##### ♻️ Reusing isolated pieces of code

Monorepos allow you to reuse packages and code from another modules while keeping them independent and isolated. This is particularly useful when you have a ton of code that you're constantly repeating on different projects.

##### 🧰 Simplifying dependencies management

Dependencies are hoisted to the root level of the project, that means you can share dependencies across all the packages that you have in your monorepo. This reduces the overhead from updating and managing multiple versions of the same dependency.

##### 🛠 Refactoring cross-project changes

Making cross-repo changes within different repositories is painful. Typically involves manual coordination between teams and repos. For example let's say you have an API that is used by many clients and you want to make a breaking change into the contract. It's not trivial to apply the update to all the clients and then coordinate the deploy of the projects and so on. With a monorepo it's easier since everything is contained in a single unit.

Before considering to implement a monorepo architecture, make sure you have the problems that this concept solves ⚠️. There's **no need to overengineer** a project. Remember **keep it simple** ✨


### The tools

- 🐉 **[Lerna](https://lerna.js.org)**: The tool for managing the monorepo packages.
- 📦 **[Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)**: Multiple packages architecture.

Now that we know what is a monorepo, the tools that we're going to use and what are they useful for, let's create a real example to see how it works.

### Creating the monorepo

##### Setup

Let's begin creating our monorepo 👏. The first thing we need to do is define the structure of the project. In this example I created two directories:

- 📁 `packages/`: This directory will contain the isolated modules that we are going to reuse on all the applications.
- 📁 `applications/`: This directory will contain all the applications of our monorepo.

```
.
└── src
    ├── applications
    └── packages
```

After that, we're going to create `package.json` to define the `workspaces` and dependencies of our monorepo.

The `workspaces` field is what [Yarn](https://yarnpkg.com/lang/en/docs/workspaces/#toc-how-to-use-it) uses to symlink our code to the `node_modules` in order to reuse and import the code, we'll see this later on.

Finally we install `lerna` as a `devDependency` to manage the monorepo.

```json
{
  "private": true,
  "engines": {
    "yarn": ">=1.17.3"
  },
  "name": "monorepo-example",
  "workspaces": [
    "src/applications/*",
    "src/packages/*"
  ],
  "scripts": {},
  "devDependencies": {
    "lerna": "latest"
  }
}
```

Now, let's define how Lerna is going to manage our monorepo in a `lerna.json` configuration file.

- `packages`: The directories that we defined as `workspaces` in the `package.json`.
- [`npmClient`](https://github.com/lerna/lerna/tree/master/commands/bootstrap#--npm-client-client): The client used to run the commands.
- [`useWorkspaces`](https://github.com/lerna/lerna/tree/master/commands/bootstrap#--use-workspaces): This flag tells lerna that we're going to use **yarn workspaces**.

```json
{
  "lerna": "latest",
  "packages": [
    "src/applications/*",
    "src/packages/*"
  ],
  "version": "1.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

We finished our setup 🙌! Let's add some simple code to see how we can manage and reuse packages on our monorepo.


##### Creating packages

A package inside our monorepo context, is an isolated and reusable piece of code. That means, every time we want to create a new package, we're going to create a new independent directory.

```
.
└── packages
    └── sayHello
        ├── index.js
        └── package.json
```

Each package needs to have a `package.json` with the `name` and `version` **fields defined**. This is important because this describes how we're going to import and use this package on the code base. You can also have dependencies in your package if you need them. On this example I'm writing a simple package called `sayHello`.


```json
{
  "name": "@packages/sayHello",
  "version": "1.0.0",
}
```

Think of every directory inside the `packages/` folder as an **isolated module**, with his own **tests**, **dependencies** and **code**.

```js
const sayHello = (name) => {
  console.log(`Hello ${name} 👋🏼`)

  return name
}

module.exports = sayHello
```

##### Using packages

This was pretty simple right? Now let's say that we have an application that it's called `cli`. In order to use `sayHello` package we should **add it** as a `dependency` on the `package.json` file. To do that we have a fancy `yarn` command 🎉

```
yarn workspace @applications/cli add @packages/sayHello@1.0.0
```

Now from our `cli` application we can **import** and **use** the package! 💯

```js
const sayHello = require('@packages/sayHello')

sayHello('Carlos')
```

Finally, we run our `cli` application from the command line using Lerna 🚀

![monorepo-workspaces](https://res.cloudinary.com/carloscuesta/image/upload/monorepo-workspaces.png)


You can find the example explained on the post on [this GitHub repository](https://github.com/carloscuesta/monorepo-example) 👀. I know this was **pretty simple**, but there are a **ton of things you can do with monorepos**! For example you can share react components in different applications while keeping them isolated. But take a look below 👇 to see monorepos on big open source projects!


### Opensource monorepo projects

Here's a list of well known open source projects that are using the monorepo architecture:

- [React](https://github.com/facebook/react)
- [Babel](https://github.com/babel/babel)
- [Jest](https://github.com/facebook/jest)
- [Storybook](https://github.com/storybookjs/storybook)
