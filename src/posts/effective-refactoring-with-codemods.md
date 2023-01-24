---
dateModified: "2023-01-30 10:00"
datePublished: "2023-01-30 10:00"
disqusIdentifier: "effective-refactoring-with-codemods"
excerpt: ""
image: ""
title: "Effective Refactoring with Codemods"
---

**Metaprogramming** is a technique where we write code to manipulate other code. I know this sounds a bit intimidating and confusing 😱, but actually I'm sure you've already used it in your daily work.

Have you ever used a transpiler, a linter or a code formatter, such as: [Babel](http://babeljs.io), [ESLint](http://eslint.org) or [Prettier](http://prettier.io)? If the answer is yes, then you've already used [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)! 👏

In this article I'm going to explain how you can use **codemods** (_metaprogramming_) to perform large-scale refactors to a codebase. Let's dive into it! 🤿

### Table of Contents

### What is Codemod?

[Codemod](https://github.com/facebookarchive/codemod) is a tool that helps you with large-scale refactors by **running transformation** on your **codebase programatically**. 

This automated transformations will allow you to change large amount of files without having to go through them manually, **saving** a lot of **time** and **increasing** **confidence**! 🙌

It was developed by Facebook around 2008. Here's a great talk by [Cristoph Nakazawa](https://twitter.com/cpojer) explaining how they use codemods to [incrementally evolve Facebook's codebase](https://www.youtube.com/watch?v=d0pOgY8__JM).

### How do they work?

On a general level internally a codemod performs the following steps:

1. Read the code input 📖
2. Generate an **A**bstract **S**yntax **T**ree (AST) 🌳
3. Traverse the AST 🔄
4. Apply the transformations ✨
5. Generate the new source code 📦

Abstract Syntax Trees is what makes all of this magic 🪄 possible. Let's understand what they are and how they work 👇

### Abstract Syntax Trees

An **Abstract Syntax Tree** (AST) is a [tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)) that represents a piece of code.

Let's understand it with an example 🖼️:

```js
function sayHello(name) {
  return `Hello ${name}! 👋`
}
```

To inspect and visualize the AST for the snippet of code 👆, we will use the [AST Explorer](https://astexplorer.net). This is an online tool that allows you to explore and play with abstract syntax trees.

The entire snippet is represented by a Program node. Inside of this node we can find different children, each of which represents a different part of the code:

![Abstract Syntax Tree Example](https://res.cloudinary.com/carloscuesta/image/upload/v1674863472/ast_q6zvry.png)

As you can see on the image the code is represented as a tree. There are different types of nodes and we can navigate through them 🚢:

![AST Explorer - Playing with the Abstract Syntax Tree](https://res.cloudinary.com/carloscuesta/image/upload/v1674863950/ast-explorer_gbkjqd.jpg)

The nodes shown in the image, will be the ones we'll traverse when writing a codemod! You can **explore the AST** [using this link](https://astexplorer.net/#/gist/b97d1ac96cddeb4084c7191af54f6a8c/974175f63f814cbb465d44453dbe93c3ab93723d) 👈

That's pretty cool right? 🤓. Now that we understand how we can navigate ASTs, let's see how we can combine them with codemods to perform large-scale refactors 🚀.
