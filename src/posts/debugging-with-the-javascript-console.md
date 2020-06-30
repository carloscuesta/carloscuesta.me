---
dateModified: "2016-11-02 14:15"
datePublished: "2016-11-02 14:15"
disqusIdentifier: "12"
excerpt: "Debugging is an essential part of programming. Tips and tricks for debugging with the JavaScript console object. Assertions, Loggings, Timers and much more!"
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1593531856/blog-featured-images/Debugging_with_the_JavaScript_console.png"
title: "Debugging with JavaScript console"
---

**Debugging is an essential part of programming**. As a Developer I spent some of my time fixing bugs and problems.

Let's cover and share some tips and tricks for debugging with the JavaScript `console` object. Taking a look at the methods to get an in-depth knowledge of the debug process.

### Assertions

#### `console.assert()`

```javascript
console.assert(x > y, 'Error x is not bigger than y');
```

Use `console.assert()` to check if evaluated expression is false. You **must pass a boolean assertion** to the `.assert()` method.

![javascript assertions](https://res.cloudinary.com/carloscuesta/image/upload/v1477416503/c0i28paxv6adsw1gynln.png)

### Logging

There are a lot of methods to log information and values to the console.

#### `console.trace()`

```javascript
console.trace('message', object);
```

Prints a [stack trace](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces). This is useful to see where a method call starts and his cycle.

#### `console.table()`

```javascript
console.table([{name: 'carloscuesta.me', language: 'html'}, {name: 'starterkit', language: 'javascript'}, {name: 'generator-starterkit', language: 'javascript'}]);
```

Displays **Object** and **Array** data into a friendly tabular format.

![console table javascript](https://res.cloudinary.com/carloscuesta/image/upload/v1477417126/wb1dq3zkflbhs5ovdfvy.png)

#### `console.log()` `console.error()` `console.warn()`

```javascript
console.info('This is just a message');
console.warn('This is a warning message');
console.error('This is an error message');
```

Displays an _information, warning or error_ message to the console.

![javascript console log error warn](https://res.cloudinary.com/carloscuesta/image/upload/v1477417270/j3kfhcw2e0o0arqhnbkc.png)

### Timers

#### `console.time()` `console.timeEnd()`

```javascript
console.time('timerLabel');
console.timeEnd('timerLabel'); // => 9.15ms
```

Starts a timer with an associated label to track how long a process takes to complete.

![javascript timers](https://res.cloudinary.com/carloscuesta/image/upload/v1477417796/qjjglvjgmqnlk2uweoxm.png)

#### Functions

#### `monitor()`

```javascript
monitor(functionName);
```

Use the `monitor()` method to track function calls. Returns the name of the function called and the arguments.

![monitor javascript](https://res.cloudinary.com/carloscuesta/image/upload/v1477505625/ulqwbwg8kdzftbcksqdb.png)

#### Events

#### `monitorEvents()`

```javascript
monitorEvents(object, ['event']);
monitorEvents(document.body, 'click');
```

Use the `monitorEvents()` method to **listen for events on a specified object**.

![monitor events javascript](https://res.cloudinary.com/carloscuesta/image/upload/v1477505807/lmegkkoaaiyrudy8q8if.png)

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.
