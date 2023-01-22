---
dateModified: "2023-01-30 10:00"
datePublished: "2023-01-30 10:00"
disqusIdentifier: "effective-refactoring-with-codemods"
excerpt: ""
image: ""
title: "Effective Refactoring with Codemods"
---

**Metaprogramming** is a technique where we write code to manipulate other code. I know this sounds a bit intimidating and confusing 😱, but actually I'm sure you've already used it in your daily work.

Have you ever used a transpiler, a linter or a code formatter, such as: [Babel](http://babeljs.io), [ESLint](http://eslint.org) or [Prettier](http://prettier.io)? If the answer is yes, then you've already used [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)! 👏. All of them receive **code** as **input** and they **generate** code as as **output**.

In this article I'm going to explain how you can use **codemods** to refactor your codebase efficiently.
