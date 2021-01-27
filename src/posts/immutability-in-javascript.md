---
dateModified: "2021-01-26 09:00"
datePublished: "2021-01-26 09:00"
disqusIdentifier: "immutability-in-javascript"
excerpt: "Have you ever heard something about immutability? Despite being a popular term, there are some misconceptions about the importance and principles of it."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1611526004/blog-featured-images/Immutability-In-JavaScript.png"
title: "Immutability in JavaScript"
---

Have you ever heard something about _immutability_? I'm mostly sure the answer is _yes!_, particularly on the programming ecosystem. Despite being a popular term, there are some misconceptions about the importance and principles of it. Let's dive in into it!

### What does it mean?

_Immutability_ is the **state of not changing**, or **being unable to be changed**.

On a programming context, means that when we need to **change the state in our program**, we **must create and track a new value** rather than mutating the existing one.

🚨 This does not mean we can't have values that change over the lifecycle of our program. That's a common misconception about immutability 🖐

#### Immutable 🆚 Mutable

To understand the difference between both, take a look at the following example. Imagine that we have a shopping cart 🛒 `object`, that contains two properties, `id` and `total`.

```js
const shoppingCart = { id: '69zd841', total: 0 }
```

Let's say that we want to update the `total` property of our `shoppingCart`, how can we achieve this?

##### Clone and update

Using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) we can create a new object cloning the previous cart and updating the `total` property, while preserving our original object in a pristine condition.

```js
{ ...shoppingCart, total: 15 }
```

##### Mutate

Through the [object property accessor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) we can perform a modification to our original object.

```js
cart.total = 15
```

------

The **difference** between those two examples is that on the first one we preserved our original shopping cart and we created a new one and on the second one we **overwrited** the value of the `total` property.

### The benefits

Now that we understood the concept of immutability and the difference between mutable 🆚 immutable data, let's see the benefits of applying it.

> Immutability is like a seatbelt, it won't prevent an accident but it saves your life when it does

#### Predictability

**Predictable** code is code where you can **anticipate the outcome** with a single read. Mutation hides change, as we've seen before, the source is lost. Hidden change creates unexpected side effects that can cause complex bugs 🐛.

When we can predict the outcome, we start to feel more confident with our code simplifying our thought process. This helps us reason easier about our program.

#### Tracking mutations

When you mutate data, you're overwriting the same reference every time that you update something as we've pointed on the first example. Then it's impossible to have a track of the changes you've done to the program state.

Immutable data gives you a clear history of state to the program, because you're creating a new reference based on the source.

### The drawbacks

Whenever we start creating new values such as `Array`, `Object` etc, instead of mutating existing ones the next question always is is: _What kind of impact has this for performance?_.

#### Performance

Avoiding mutations has a **cost** that's correct, every time we have to reallocate a new value, that's consuming **CPU time** and **memory**, including the **garbage collection** process for values that are no longer referenced.

Is that an **acceptable trade-off**? **It depends**. We need some **context** to answer that question, for example:

If you have a single state change, that happens a few times on the lifecycle of your program, creating a new object, is certainly not a problem. It won't have no practical impact on the performance of the app. Compared to the time you will save not having to track and fix bugs caused by side effects, the winner clearly is immutability 🎉

Again, if that state change is going to occur frequently, or it happens in a critical path of your app, then performance is a totally valid concern 👍

Thankfully, there are some libraries out there that will provide performance optimizations such as [Immutable.js](https://immutable-js.github.io/immutable-js) and [seamless-immutable](https://github.com/rtfeldman/seamless-immutable).

### Immutable data in JS

#### Constants

A constant is a **variable** that **cannot be reassigned** and **redeclared**. This is an important concept to understand, because it does not mean the value it holds is immutable.

The use of `const` tells the human being who's reading your code that the following variable won't be reassigned or redeclared. It's a great improvement in **code readability** because we're intentionally communicating that.

```js
const fruits = ['🍌','🍓', '🥥']

// We can't reassign the constant
// ❌ TypeError: Assignment to constant variable.
fruits = ['🍏']

// We can't redeclare the constant
// ❌ SyntaxError: Identifier 'fruits' has already been declared
const fruits = ['🥝']

// ✅ We can mutate the value as we want
// fruits -> ['🍌','🍓', '🥥', '🍍']
fruits.push('🍍')
```

#### Spread syntax

Also known as [`...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), it's a useful operator for cloning _iterables_ such as `Array` or `Object`.

```js
const fruits = ['🍌','🍓', '🥥']
const shoppingCart = { id: '69zd841', total: 0 }

// Add a some fruits to the end of the array
const fruitsCollection = [...fruits, '🍍', '🥝']

// Update the shoppingCart total and clone all the other properties
const shoppingCartWithTotal = {...shoppingCart, total: 15 }
```

#### Object.freeze

The [`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) function is a simple way to turn a mutable `Object` or `Array` into an "immutable value". This function freezes the object 🥶 you pass as argument.

But what does _frozen object_ means? A **frozen object** is an Object whose properties/indices has been marked as read-only and non-reconfigurable, so they can't be reassigned and the Object itself is marked as non-extensible, so no new properties can be added.

The freezing process ❄️ is only made at the **top level** of the object. If you want to make your whole object immutable, make sure you deep **freeze** each sub `Object` or `Array` 🤓.

```js
const fruits = Object.freeze(['🍌','🍓', '🥥'])
const shoppingCart = Object.freeze({ id: '69zd841', total: 0, products: [] })

// We can't extend the fruits Array
// ❌ TypeError: Cannot add property N, object is not extensible
fruits.push('🍏')

// ❌ We can't mutate shoppingCart top-level properties
// shoppingCart -> { id: '69zd841', total: 0, products: [] }
shoppingCart.total = 123

// 🚨 We can mutate shoppingCart objects
// shoppingCart -> { id: '69zd841', total: 0, products: [{ name: 'Beer' }] }
shoppingCart.products.push({ name: 'Beer' })
```
