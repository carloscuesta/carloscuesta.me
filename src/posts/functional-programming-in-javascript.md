---
dateModified: '2021-03-24 10:00'
datePublished: '2021-03-24 10:00'
disqusIdentifier: 'functional-programming-in-javascript'
excerpt: "Functional programming, has become a popular trend in the JavaScript community. Let's explain in a simple way the basics of FP applied to JavaScript."
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1616513220/blog-featured-images/Functional_programming_in_JavaScript.png'
title: 'Functional programming in JavaScript'
---

Functional programming, often abbreviated as **FP** has become a 🔥 popular trend over the last years in the JavaScript community, but it was created on the _1950s_, long way before JavaScript 😅

As soon as you start searching _"functional programming"_ on the internet, you're going to hit a brick wall of academic terms that are really intimidating 😱 for someone who is learning, don't be scared by those concepts, it's not as hard as it seems.

In this article I'm going to explain in a friendly and simple way, the basics of this paradigm applied to JavaScript. Let's get started 🤓

### Table of Contents

### What is Functional programming?

**Functional programming** is a programming **paradigm**, a way of thinking about code, that consists of building software by **composing functions**. Functions are the center of **FP**, hence its name.

Does that mean _functional_ is about just programming with the `function` keyword? Absolutely no! It's **how we use** those functions what makes our code _functional_.

The _functional_ paradigm is based on the following principles:

- **Immutability** 🧊: The state of not changing, or being unable to be changed. Immutability makes our code _predictable_ and free of [_side effects_](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>) 🐛
- **Declarative** 📖: Declarative programming is code that is focused on describing _what_ the code does, _outcome_.
- **Pure functions** 🦄: Functions that given the _same input_ always return the _same output_ and have no side effects.
- **Function composition** 🍱: The process of combining two or more functions to produce new functions or perform some operations.

### Why Functional programming?

#### Confidence

One of the best things about the _functional_ paradigm is that it helps you to create **predictable** code.

How? With **immutable** values and **pure functions**. Those principles create software free of side effects, so it's easy to understand and predict what a piece of code **will do** just **by reading it** 🍰, without executing the code.

> "Code that you don’t understand is code you can’t trust”

This mindset helps you to boost your confidence 🔝 because you won't have to worry about anything else than the piece of code you're focusing on 🎯

Predictable code is easier to maintain and debug. In the long term, this reduces the number of bugs you may ship into production 🐛

#### Communication

I believe that **coding is about communication**, the role of code itself is communicating with other humans before instructing the computer. This sounds a little bit _philosophical_ right 🔮?

But think about your own experience as a developer; you probably spend much **more time reading** and understanding code than actually **programming** it 🧑‍💻.

Writing **declarative** code, which is another principle of the _functional_ paradigm will help you to focus on describing **what** the code does, instead of _how_ it works, so code will be much more understandable for humans.

### Functional JavaScript

#### Immutable

Immutability is what keeps us safe 😊 from side effects and unexpected bugs 🐛. I [wrote a post reasoning about Immutability in JavaScript](https://carloscuesta.me/blog/immutability-in-javascript) 📝. Take a look at it if you want to understand the whole concept.

Imagine that we have a `shoppingCart` that has two properties, `id` and `total`. Let's say we want to update the `total` property of our shopping cart, how can we achieve this?

```js
const shoppingCart = { id: '69zd841', total: 0 }
```

##### Immutable ✅

Clone the `shoppingCart` object and update the `total` property value.

```js
{ ...shoppingCart, total: 15 }
```

##### Mutable ❌

Perform a modification through the object property accessor to our original object.

```js
cart.total = 15
```

#### Declarative

Declarative programming consists on describing **what** the code does and making the **outcome predictable** without explicitly describing **how** the control flow works.

This definition may sound a bit abstract 🤨. But let's understand this with an example by comparing _declarative_ to _imperative_ code.

We're going to build, a code that given an array of numbers returns the even ones 🔢:

##### Declarative ✅

Focused on describing _what_ the code does and the outcome of it.

**Example**

To solve the example using a declarative approach, we create a `Function` that receives an array of numbers.

As we want to get all the even numbers, we are going to make use of [`Array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function:

```js
const getEvenNumbers = (numbers) => numbers.filter((n) => n % 2 === 0)

getEvenNumbers([2, 5, 8, 10, 15]) // => [2, 8, 10]
```

##### Imperative ❌

Focused on _how_ it works.

**Example**

To solve the example using an imperative approach, we create a function that receives an array of numbers. Inside the function, we initialize an empty array variable called `evenNumbers`, to store the numbers that met the condition.

After that, we iterate our array using a `for` loop with an `if` statement to push the even numbers to the empty array in order to return them at the end of the iteration.

```js
function getEvenNumbers(numbers) {
  let evenNumbers = []
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i])
  }
  return evenNumbers
}

getEvenNumbers([2, 5, 8, 10, 15]) // => [2, 8, 10]
```

##### Declarative 🆚 Imperative

As you can see in **both examples** on **declarative approach** there are no explicit conditionals, loops, side effects, reassignments, or mutations. Instead, it employs **well-known trustable patterns** like filtering and composition.

With the imperative approach, we are forced to store through assignment each intermediate result of the iteration. Certainly, this increases the complexity of the code, as a result of this, understanding and finding bugs becomes a harder task.

The focus shifts from **low-level** _how_ to **higher level** _what_ outcomes.

On both examples, you can certainly trace and predict the outcome of the code just by reading it. However the **declarative** approach is much more **clear** and **straightforward** ✨. Simply because you're abstracting all the iteration and filter logic.

**Familiarity** has a big **influence** on your judgments of _clearness_ and _readability_. Meaning that if you're more used to work with an _imperative_ approach you'll probably find those snippets easier to understand.

But as soon as you get on the same level of familiarity with the _declarative_ approach your mindset will click and you'll start to see the benefits 🥳

#### Functions over procedures

If you plan to do **FP** you **should be using functions as much as possible**, trying to avoid procedures wherever possible. All your functions should **take input(s)** and **return output(s)**.

##### Function ✅

```js
const sayHello = (name) => `Hello ${name} 👋`

sayHello('Carlos') // => Hello Carlos 👋
```

##### Procedure ❌

```js
const name = 'Carlos'
const message = `Hello ${name} 👋`

console.log(message) // => Hello Carlos 👋
```

#### Pure functions

A **pure function** is a `function` which:

- Given the **same input**, will always return the **same output**.
- Has **no side effects**.

##### Pure functions ✅

This function given the same `x` and `y` inputs will always return the same output. Has no side effects.

```js
const add = (x, y) => x + y

add(5, 10) // => 15
```

##### Impure functions ❌

This `incrementCount` function has a side effect, because it's depending on state that it's outside of his own scope.

```js
let count = 0

const incrementCount = () => {
  count = count + 1
}
```

Another example of built in JavaScript impure functions would be:

- [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

```js
// Who knows what will return! 😜
Math.random() // => ?

// Always returns the same output, but writing to the console is a side effect
console.log('Hello! 👋')
```

#### Composing functions

Another important concept on the _functional paradigm_ is **composing** functions and using **higher-order functions**. In JavaScript, `functions` are values, this means that we can assign them into variables and pass them to other functions.

Think about the even numbers example we used before 🔢;

As you can see, we can assign a function to the `isEven` variable, because functions are values:

```js
const isEven = (number) => number % 2 === 0

isEven(10) // => true
isEven(5) // => false
```

This allows us to compose and build our code by combining smaller functions and pass the `isEven` function to the [`Array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) higher-order function:

```js
const getEvenNumbers = (numbers) => numbers.filter(isEven)

getEvenNumbers([5, 10, 20]) // => [10, 20]
```

See how we broke up the problem of determining if a number is even with the `isEven` function and then how we found the even numbers from the array composing the `filter` function with the utility one.

**Composing** functions is a great technique to **broke up** a **problem** into smaller isolated pieces. In a way that we can **reason** about those problems **separately**, which makes our functions:

- Reusable
- Easier to maintain
- Easier to debug

#### List operations

Working with lists, also known as Arrays, is something that we do daily, let's examine the most common operations and how we can do them with a _functional_ approach.

##### Map

A **mapping** 🗺 is a **transformation** from **one value** to **another**. We can apply a transformation to a list using the [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function.

For example, imagine that as a result of calling to an API we've got the following JSON:

```json
{
  "data": [
    {
      "description": "An emoji guide for your commit messages.",
      "id": 1,
      "language": "javascript",
      "name": "gitmoji",
      "stargazers_count": 9500
    }
  ]
}
```

Let's say that want to render the data on our application, but we don't want to couple to the data schema the API uses, as it could potentially change and we don't need all the data.

How we can solve that? Easy by making a mapping with the `Array.map` function:

```js
response.data.map((repository) => ({
  description: repository.description,
  name: repository.name,
  stars: repository.stargazers_count,
}))
```

This mapping would transform the JSON to something like this:

```js
;[
  {
    description: 'An emoji guide for your commit messages',
    name: 'gitmoji',
    stars: 9500,
  },
]
```

##### Filter

The filtering 🔎 process consists on **including** or **excluding** certain **elements** from a list based on a certain **condition** using the [`Array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function.

The process could be _inclusive_ or _exclusive_. This sometimes causes confusion, because you have to twist your brain when you're applying an excluding filter.

Let's illustrate this operation with our `shoppingBasket` object.

```js
const shoppingBasket = [
  { name: '🍏', type: 'fruit' },
  { name: '🍌', type: 'fruit' },
  { name: '🥕', type: 'vegetable' },
  { name: '🍔', type: 'meat' },
  { name: '🥔', type: 'vegetable' },
]
```

We want to perform two operations:

- Inclusive: Get every product that is a `fruit`
- Exclusive: Get every product that is not a `fruit`

Let's understand the difference with a quick example:

**Inclusive filter**

Let's filter our `shoppingBasket` to get the fruits

```js
shoppingBasket.filter((item) => item.type === 'fruit')
```

This returns a new list:

```js
;[
  { name: '🍏', type: 'fruit' },
  { name: '🍌', type: 'fruit' },
]
```

**Excluding filter**

Now we're going to do the opposite, get everything that is not a fruit.

```js
shoppingBasket.filter((item) => item.type !== 'fruit')
```

This returns a new list:

```js
;[
  { name: '🥕', type: 'vegetable' },
  { name: '🍔', type: 'meat' },
  { name: '🥔', type: 'vegetable' },
]
```

##### Reduce

A reduction ♻️ is a **transformation** from **two or more values** into a **single one**. Hence the name of the [`Array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function 🌝

Suppose that we want to transform our `shoppingBasket` list to an object, that groups the products by the `type` property, something like this:

```json
{
  "fruit": [],
  "vegetable": [],
  "meat": []
}
```

Easy! Let's apply a reduction to the original list that contains N items to transform it to an object:

```js
const shoppingBasket = [
  { name: '🍏', type: 'fruit' },
  { name: '🍌', type: 'fruit' },
  { name: '🥕', type: 'vegetable' },
  { name: '🍔', type: 'meat' },
  { name: '🥔', type: 'vegetable' },
]

shoppingBasket.reduce(
  (accumulator, value) => ({
    ...accumulator,
    [value.type]: [...(accumulator[value.type] || [])].concat(value),
  }),
  {},
)
```

The outcome of this reduction is an Object that looks like this:

```js
{
  fruit: [
    { name: '🍏', type: 'fruit' },
    { name: '🍌', type: 'fruit' }
  ],
  vegetable: [
    { name: '🥕', type: 'vegetable' },
    { name: '🥔', type: 'vegetable' }
  ],
  meat: [{ name: '🍔', type: 'meat' }]
}
```

#### Recursion

Recursion is a technique that happens when a **function calls itself** until it satisfies a base condition. Is a way to avoid imperative looping and reassignments. When used properly, it helps you to solve complex problems in a declarative way.

☢️ Recursion should be used carefully because it relies a lot on memory, so the performance of your application could be affected.

Let's see a silly example to understand what _recursion_ looks like:

```js
const countDownFrom = (number) => {
  if (!number || number === 0) return number
  console.log(number)
  countDownFrom(number - 1)
}
```

Note that since the function calls itself, you'll need to specify a **stop condition**.

### Learning resources

Do you want to learn more about functional programming in JavaScript? Here's an awesome list 🤩:

- 📘 [Functional-Light JavaScript by Kyle Simpson](https://github.com/getify/Functional-Light-JS)
- 🎬 [Functional Programming in JavaScript by Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

### FP libraries

Here's a list of _functional programming_ libraries you can check:

- [Ramda](https://ramdajs.com)
- [Lodash](http://lodash.com)
