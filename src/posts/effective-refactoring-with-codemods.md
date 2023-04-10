---
dateModified: '2023-01-29 22:00'
datePublished: '2023-01-29 22:00'
disqusIdentifier: 'effective-refactoring-with-codemods'
excerpt: "A codemod is a tool that helps you with large-scale refactors. In this article I'm going to explain how you can use them along with Abstract Syntax Trees."
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1675022732/blog-featured-images/Effective_Refactoring_with_Codemods.png'
title: 'Effective Refactoring with Codemods'
---

**Metaprogramming** is a technique where we write code to manipulate other code. I know this sounds a bit intimidating and confusing 😱, but actually I'm sure you've already used it in your daily work.

Have you ever used a transpiler, a linter or a code formatter, such as: [Babel](http://babeljs.io), [ESLint](http://eslint.org) or [Prettier](http://prettier.io)? If the answer is yes, then you've already used [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)! 👏

In this article I'm going to explain how you can use **codemods** (_metaprogramming_) to perform large-scale refactors to a codebase. Let's dive into it! 🤿

### Table of Contents

### What is a codemod?

A **codemod** is a tool that helps you with large-scale refactors by **running transformations** on your **codebase programatically**.

This automated transformations will allow you to change large amount of files without having to go through them manually, **saving** a lot of **time** and **increasing** **confidence**! 🙌

### How do they work?

On a general level codemods perform the following steps:

1. Read the code input 📖
2. Generate an **A**bstract **S**yntax **T**ree (AST) 🌳
3. Transform the AST 🔄
4. Generate the new source code 📦

Abstract Syntax Trees is what makes all of this magic 🪄 possible. Let's understand what they are and how they work 👇

### Abstract Syntax Trees

An **Abstract Syntax Tree** (AST) is a [tree data structure](<https://en.wikipedia.org/wiki/Tree_(data_structure)>) that represents a piece of code.

Let's understand it with an example 🖼️:

```js
function sayHello(name) {
  return `Hello ${name}! 👋`
}
```

To inspect and visualize the AST for the snippet of code 👆, we will use the [AST Explorer](https://astexplorer.net). This is an online tool that allows you to explore and play with abstract syntax trees.

The entire snippet is represented by a **Program node**. Inside of this **node** we can find different **children**, each of which represents a different part of the code:

![Abstract Syntax Tree Example](https://res.cloudinary.com/carloscuesta/image/upload/v1674863472/ast_q6zvry.png)

As you can see on the image the code is represented as a tree. There are different types of nodes and we can navigate through them 🚢:

![AST Explorer - Playing with the Abstract Syntax Tree](https://res.cloudinary.com/carloscuesta/image/upload/v1674985551/ast-explorer_rpbzov.jpg)

The nodes shown in the image, will be the ones we'll traverse when writing codemods! You can **explore the AST** [using this link](https://astexplorer.net/#/gist/b97d1ac96cddeb4084c7191af54f6a8c/974175f63f814cbb465d44453dbe93c3ab93723d) 👈

That's pretty cool right? 🤓. Now that we understand how we can navigate AST, let's see how we can combine them with codemods to perform large-scale refactors 🚀.

### Refactoring with codemods

Time to put knowledge into 👨‍💻 practice. I'm going to use **JavaScript** for the sake of example, but the fundamentals and concepts are the same for any other language.

I will use the following tools to perform the refactor:

- [AST Explorer](https://astexplorer.net): The online tool we saw before to explore and visualize AST.
- [JSCodeshift](https://github.com/facebook/jscodeshift): A toolkit for running and writing codemods.

#### Understanding the transformation

##### Input

Image that in our codebase we are using the [`lodash/get`](https://lodash.com/docs/4.17.15#get) helper to **safely extract values from objects**, like this:

```js
import { get } from 'lodash/object' // get(object, path, [defaultValue])

const cartTotal = get(cart, 'attributes.items.total', 0)
```

##### Output

Now, we decide that we want to **stop using the lodash** helper in **favour** of the **native JavaScript** operator to safely extract values from objects: [`optional chaining`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), in this way:

```js
const cartTotal = cart?.attributes?.items?.total ?? 0
```

As you can see on the code 👆 our transformation needs to perform a few changes:

1. Remove the import statement.
2. Replace the `get` helper with optional chaining.
3. Provide a default value if the value is `undefined`.

#### Writing the Codemod

With the transformation clear in mind, it's time write the codemod! 👨‍💻. Go ahead and open the [AST Explorer](https://astexplorer.net) and select:

- Language: _JavaScript_
- Parser: _@babel/parser_
- Transform: _jscodeshift_

You can also use this [link](https://astexplorer.net/#/gist/f70fc3f955950b232c54263453d19a23/42786c4bb94016a96f9c56fcc76d287956c471eb) to open the explorer 🕵️‍♀️ with the correct settings and code 👈. You should end up with a screen similar to this one:

![AST Explorer - Writing the codemod](https://res.cloudinary.com/carloscuesta/image/upload/v1674985552/ast-writing-codemod_jnbhno.jpg)

##### Generating the AST

The first thing we need to do is transforming the source code into an Abstract Syntax Tree, so we can traverse it.

To transform code into an AST we will invoke the `j` function from the `jscodeshift` library, passing the code as a parameter:

```js
export const parser = 'babel'

export default function transformer(file, api) {
  const j = api.jscodeshift
  const ast = j(file.source)
}
```

##### Traversing the AST

With the AST 🌳 already in place, we can start **traversing it**. Use the explorer panel to **find** the **nodes** that represents the `import` statement and the `get()` helper calls. Did you find them? 👇

![AST Explorer - Traversing the AST](https://res.cloudinary.com/carloscuesta/image/upload/v1674947801/ast-lodash-demo_jhtiql.png)

These are the two nodes we will need to transform to refactor our code: `ImportDeclaration` and `CallExpression`.
Now, let's transform the nodes ♻️

##### Transforming the nodes

As we saw before, we need to transform two nodes from the AST:

- `CallExpression`: Remove lodash `get` helper with optional chaining.
- `ImportDeclaration`: Remove the `get` import statement.

Once the AST is completely **transformed**, we will **convert it** back **to source code**.
Let's break this down into steps ✅:

###### 1. Find `get` helper usages

To find `get` calls we will have to traverse the AST, **finding** nodes with the type `CallExpression` containing a `callee.name` of `get` 🔎

```js
ast.find(j.CallExpression, { callee: { name: 'get' } })
```

###### 2. Replace `get` with optional chaining and default value

For every match, we will **replace** the AST object to use **optional chaining** and the default value ♻️
For that, we will use the `replaceWith` function, passing the new AST object as a parameter.

I know the AST transformation might look a bit complex 😨, but it's just a combination of:

- `ExpressionStatement`: To replace the function call with an expression.
- `LogicalExpression`: To provide a default value.
- `OptionalMemberExpression`: To build the optional chaining.
- `Identifier`: To represent the source object.

```js
.forEach(node => {
  const [source, path, fallback] = node.value.arguments
  const pathItems = path.value.split('.')
  const lastPathItem = pathItems.at(-1)

  j(node).replaceWith(
    j.expressionStatement(
      j.logicalExpression(
        '??',
        j.optionalMemberExpression(
          pathItems.slice(0, -1).reduce(
            (node, param) => j.optionalMemberExpression(
              node,
              j.identifier(param)
            ),
            source
          ),
          j.identifier(lastPathItem)
        ),
        fallback
      )
    )
  )
})
```

###### 3. Find lodash/get import statements

Once `get` is removed, we can safely delete the import statements. But first, we will need to **find** nodes with the type `ImportDeclaration` containing a `source.value` of `lodash/object` 🔎

```js
ast.find(j.ImportDeclaration, { source: { value: 'lodash/object' } })
```

###### 4. Prune import statements

To remove `get` from the import statement, we will iterate over the matches **filtering** the `specifiers` array to remove the `get` import. In case there are no more imports, we will remove the complete statement.

```js
.forEach((node) => {
  const importedModules = node.value.specifiers.filter(
    ({ imported }) => imported.name !== 'get'
  )

  if (importedModules.length) {
    node.value.specifiers = importedModules
  } else {
    j(node).remove()
  }
})
```

###### 5. Convert AST back to source code

Once all the transformations are applied, we need to convert the AST 🌳 object back to source code 🪄.
For that we will use the following method:

```js
ast.toSource()
```

##### Putting it all together

Now it's time to put all the pieces together 🧩, so we can transform [our code](#input) to the [output](#output) we described before:

<details>
  <summary>Click here to see the snippet 👈</summary>

```js
export const parser = 'babel'

export default function transformer(file, api) {
  const j = api.jscodeshift
  const ast = j(file.source)

  ast.find(j.CallExpression, { callee: { name: 'get' } }).forEach((node) => {
    const [source, path, fallback] = node.value.arguments
    const pathItems = path.value.split('.')
    const lastPathItem = pathItems.at(-1)

    j(node).replaceWith(
      j.expressionStatement(
        j.logicalExpression(
          '??',
          j.optionalMemberExpression(
            pathItems
              .slice(0, -1)
              .reduce(
                (node, param) =>
                  j.optionalMemberExpression(node, j.identifier(param)),
                source
              ),
            j.identifier(lastPathItem)
          ),
          fallback
        )
      )
    )
  })

  ast
    .find(j.ImportDeclaration, { source: { value: 'lodash/object' } })
    .forEach((node) => {
      const importedModules = node.value.specifiers.filter(
        ({ imported }) => imported.name !== 'get'
      )

      if (importedModules.length) {
        node.value.specifiers = importedModules
      } else {
        j(node).remove()
      }
    })

  return ast.toSource()
}
```

</details>

Finally we can see the codemod in in action 💖

![AST Explorer Codemod Transformation](https://res.cloudinary.com/carloscuesta/image/upload/v1675004869/ast-codemod-transform_fie1cb.jpg)

#### Testing codemods

Codemods can be potentially **dangerous** and they can **break** your code 🐛. Luckily, you can **write unit tests** for them to **ensure everything works** as expected ✅ **before running** them on the codebase.

The library I used on this article provides some utilities to **test** codemods. You can find more information about them [here](https://github.com/facebook/jscodeshift/blob/main/README.md#unit-testing).

In case you're using a different tool with no testing utilities, you can always **test** codemods by **running** them over a mock file **asserting** the output.

### Conclusion

Automating codebase changes can be **difficult** the first time you do it, but it's totally worth it.
It will **save** you a **lot of time** 🚀 and it will prevent you from introducing bugs 🐛.

Automate all the things! 🙌
