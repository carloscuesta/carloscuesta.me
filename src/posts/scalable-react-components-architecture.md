---
dateModified: '2018-10-16 12:10'
datePublished: '2018-10-16 12:10'
disqusIdentifier: '5b6c646126d36606d1805ab3'
excerpt: 'Creating scalable React components using the folder pattern. A simple way to organize and structure React Components.'
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/Scalable_React_Components_architecture.png'
title: 'Scalable React Components architecture'
---

It's been a while since I've started working with [**React**](http://reactjs.org) and [**React-Native**](https://facebook.github.io/react-native/) in production. One of the **greatest things** about **React** is the **flexibility** the library gives to you. Meaning that you are free to decide how do you want to implement almost every detail of your project for example the _architecture and structure_.

However this freedom on the long term, could lead to a complex and messy codebase, specially if you don't follow a pattern. In this post I'll explain **a simple way** to **organize** and **structure** React **Components**.

> A Component is a **JavaScript** **function** or class that **returns** a **piece of UI**.

We're going to create an `EmojiList` component and then we are going to refactor it breaking it up into smaller isolated pieces applying the **folder pattern**. Here's how our component looks like:

![emojilist](https://res.cloudinary.com/carloscuesta/image/upload/emojilist-compressed.png)

### EmojiList

As I mentioned before, we can start really simple and small, without following any pattern. This is our `EmojiList` component contained in a single function.

<iframe src="https://codesandbox.io/embed/3vjxn0ykyq?autoresize=1&module=%2Fsrc%2Fcomponents%2FEmojiList.js&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

If you open the _CodeSandbox sidebar_ you'll see that our file tree looks like this:

```
.
├── components
│   ├── EmojiList.js
│   └── styles.js
└── index.js
```

There's **nothing wrong with this approach**. But on **larger codebases** that kind of component **becomes hard to maintain**, because there a lot of things in it: _state_, _ui_, _data_... Take a look at our component code below 👇

`EmojiList.js`

```jsx
import React from 'react'

import styles from './styles'

class EmojiList extends React.Component {
  state = {
    searchInput: '',
    emojis: [],
  }

  render() {
    const emojis = this.state.emojis.filter((emoji) =>
      emoji.code.includes(this.state.searchInput.toLowerCase())
    )

    return (
      <ul style={styles.list}>
        <input
          style={styles.searchInput}
          placeholder="Search by name"
          type="text"
          value={this.state.searchInput}
          onChange={(event) =>
            this.setState({ searchInput: event.target.value })
          }
        />
        {emojis.map((emoji, index) => (
          <li key={index} style={styles.item}>
            <div style={styles.icon}>{emoji.emoji}</div>
            <div style={styles.content}>
              <code style={styles.code}>{emoji.code}</code>
              <p style={styles.description}>{emoji.description}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default EmojiList
```

A step to improve this code, would be to create separate components into the same file and then using them at the main component. However, you'll be sharing styles among other things and that could be confusing.

#### Refactor

Let's start refactoring the single component into multiple ones by [breaking up the UI into a component hierarchy](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy).

![emojilist-breakdown](https://res.cloudinary.com/carloscuesta/image/upload/emojilist-breakdown.png)

If we take a look at the image, it's easy to identify that we can **break** up our **UI** in **three** different **components**: 🛠

- <span style="color: #039be5">**`EmojiList`**</span>: Combines the smaller components and shares the state down.
  - <span style="color: #d81b60">**`SearchInput`**</span>: Receives user input and displays the search bar.
  - <span style="color: #fbc02d">**`EmojiListItem`**</span>: Displays the List Item for each emoji, with the _icon_, _name_ and _description_.

We're going to **create** a **folder** for **each** **component**, with two files, an `index.js` that is going to hold all the code for the component and the `styles.js`. That's one of the good things about this pattern. Every component defines his own UI and styles, **isolating** this piece of **code from** another **components** that **doesn't need to know anything about them**.

<iframe src="https://codesandbox.io/embed/lx8ykrljl9?autoresize=1&module=%2Fsrc%2Fcomponents%2FEmojiList.js&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Notice that inside the `EmojiList` folder, (_that is a component_), we add two nested components that only will be used within the `EmojiList` component. Again, that's because these two components aren't going to be used out of that context. This helps reducing the visual clutter a lot.

```
.
├── EmojiList
│   ├── EmojiListItem
│   │   ├── index.js
│   │   └── styles.js
│   ├── SearchInput
│   │   ├── index.js
│   │   └── styles.js
│   ├── index.js
│   └── styles.js
└── index.js
```

Now let's isolate and separate the code into the three components from the smallest to the biggest one:

`EmojiListItem/`

This component renders every emoji item that will appear on the list.

```jsx
import React from 'react'

import styles from './styles'

const EmojiListItem = (props) => (
  <li style={styles.item}>
    <div style={styles.icon}>{props.emoji}</div>
    <div style={styles.content}>
      <code style={styles.code}>{props.code}</code>
      <p style={styles.description}>{props.description}</p>
    </div>
  </li>
)

export default EmojiListItem
```

`SearchInput/`

This component receives the user input and updates the state of the parent component.

```jsx
import React from 'react'

import styles from './styles'

const SearchInput = (props) => (
  <input
    style={styles.searchInput}
    placeholder="Search by name"
    type="text"
    value={props.value}
    onChange={props.onChange}
  />
)

export default SearchInput
```

`EmojiList/`

This is the top level component, holds the state and data of our example and imports the other components to recreate the whole UI of our tiny application. Isolating components makes the render method more readable and easier to understand ✨.

```jsx
import React from 'react'

import SearchInput from './SearchInput'
import EmojiListItem from './EmojiListItem'
import styles from './styles'

class EmojiList extends React.Component {
  state = {
    searchInput: '',
    emojis: [],
  }

  render() {
    const emojis = this.state.emojis.filter((emoji) =>
      emoji.code.includes(this.state.searchInput.toLowerCase())
    )

    return (
      <ul style={styles.list}>
        <SearchInput
          onChange={(event) =>
            this.setState({ searchInput: event.target.value })
          }
          value={this.state.searchInput}
        />
        {emojis.map((emoji, index) => (
          <EmojiListItem
            key={index}
            code={emoji.code}
            description={emoji.description}
            emoji={emoji.emoji}
          />
        ))}
      </ul>
    )
  }
}

export default EmojiList
```

That's basically the architecture that I use at the company I'm working on. I'm **pretty satisfied** with the **experience** of using this pattern. Our components turned out a lot easier to maintain and use. Anyway there are **no silver bullets** on Software Engineering, so **figure what works best for you** or your team!
