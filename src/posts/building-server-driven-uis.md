---
dateModified: '2024-10-04 10:00'
datePublished: '2024-10-04 10:00'
disqusIdentifier: 'building-server-driven-uis'
excerpt: 'Server-Driven UIs known as SDUI is an architectural pattern that aims to reduce client-side complexity by building user-interfaces from the server over APIs. This is transforming the way apps are developed, fostering dynamic and flexible UIs.'
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1728038996/blog-featured-images/Building-Server-Driven-UIs.png'
title: 'Building Server-Driven UIs'
---

**Server-Driven UIs** known as _SDUI_ is an architectural pattern that aims to reduce client-side complexity by building user-interfaces from the server over APIs. This is transforming the way apps are developed, **fostering dynamic** and **flexible** UIs.

This is not just theory. Some of the biggest names in the tech industry adopted Server-Driven UIs, such as: [Airbnb](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5), **Instagram** and [Shopify](https://shopify.engineering/server-driven-ui-in-shop-app) to name a few.

In this article we will explore what are Server-Driven UIs, their benefits, and how to implement them 🙏

### Understanding Server-Driven UIs

The best way to understand Server-Driven UIs is by comparing it with the traditional approach.

In the **traditional** world, the **data** comes from the **server** 💻, which acts as the source of truth and the **UI** is **driven** by **each** of those **clients** (Web, iOS, Android). Each client is responsible for fetching the data and transforming it into a user-interface.

With **SDUI**, the **definition** of the **user-interface** **shifts** from the client **to the server**, unifying this logic for all of them. The clients will **fetch the UI** from the server and **render it**.

Let's illustrate this with an example, using the Apple Podcasts [webapp](https://podcasts.apple.com/us/charts?genre=1318):

![Apple Podcasts – Top Technology Podcasts](https://res.cloudinary.com/carloscuesta/image/upload/v1727631184/building-sdui-podcasts.jpg)

Now, let's represent the user-interface of the _Top Technology Podcasts_ page using a JSON to simulate the server response:

#### Traditional

A contract is defined between the client and the server, adhering to a specific structure and shape.

The client will fetch the **data** from the server and will transform it into a user-interface.

```json
{
  "title": "Top Technology Podcasts",
  "shows": {
    "title": "Top shows",
    "items": [
      {
        "description": "Ben Gilbert and David Rosenthal",
        "image": "https://placehold.it/200x200",
        "rank": 1,
        "title": "Acquired",
        "url": "/podcast/acquired/id105"
      }
    ],
    "episodes": {
      "title": "Top episodes",
      "items": [
        {
          "duration": "1h 36m",
          "image": "https://placehold.it/200x200",
          "publishedAt": "09-28-2024",
          "rank": 1,
          "title": "OpenAI's $150B conversion, Meta's AR [...]",
          "url": "/episode/acquired/id105/episode/1"
        }
      ]
    }
  }
}
```

#### Server-Driven UI

With _SDUI_ the server will send a **tree**-like **structure of components** to the client. Each component represents a part of the UI and contains information about what to render and the properties the component needs.

The client will **traverse** this **tree** 🌳, rendering each component as specified by the server.

```json
[
  {
    "type": "Title",
    "props": { "text": "Top Technology Podcasts" }
  },
  {
    "type": "SectionTitle",
    "props": { "text": "Top shows" }
  },
  {
    "type": "PodcastList",
    "children": [
      {
        "type": "Podcast",
        "props": {
          "description": "Ben Gilbert and David Rosenthal",
          "image": "https://placehold.it/200x200",
          "rank": 1,
          "title": "Acquired",
          "url": "/podcast/acquired/id105"
        }
      }
    ]
  },
  {
    "type": "SectionTitle",
    "props": { "text": "Top Episodes" }
  },
  {
    "type": "EpisodeList",
    "children": [
      {
        "type": "Episode",
        "props": {
          "duration": "1h 36m",
          "image": "https://placehold.it/200x200",
          "publishedAt": "09-28-2024",
          "rank": 1,
          "title": "OpenAI's $150B conversion [...]",
          "url": "/episode/acquired/id105/episode/1"
        }
      }
    ]
  }
]
```

### Building Server-Driven UIs

Now that we understand the concept behind Server-Driven UIs, let's explore how to build them in a practical scenario.

We will break down the process into the following steps:

1. **Define the component tree** 🌳: Define the components and the tree that represents the user-interface.
2. **Implement the components** 🧩: Create a component for each definition.
3. **Build the rendering engine** ⚙️: Traverse the JSON tree and render each component as specified.

#### Define the component tree

Based on the JSON response we defined previously, here's how we're going to break down the user-interface into components:

- `Title`: The main title of the page.
- `SectionTitle`: The title of a section.
- `PodcastList`: A list of podcasts.
- `Podcast`: The podcast item.
- `EpisodeList`: A list of episodes.
- `Episode`: The episode item.

![SDUI Component Tree](https://res.cloudinary.com/carloscuesta/image/upload/v1727870288/building-sdui-component-tree.jpg)

#### Implement the components

After defining the tree, it's time to build the components. I will be doing it with [React](https://react.dev) and [Tailwind](https://tailwindcss.com/) but you can use any other library.

<details>
  <summary>Toggle components code 👈</summary>

```jsx
const Title = (props: { text: string }) => (
  <h1 className="text-3xl font-extrabold">{props.text}</h1>
)
```

```jsx
const SubTitle = (props: { text: string }) => (
  <div className="flex items-center gap-x-1">
    <h2 className="text-lg font-bold">{props.text}</h2>
    <ChevronRight className="opacity-60" size={20} />
  </div>
)
```

```jsx
const PodcastList = (props: Props) => (
  <ul className="grid grid-flow-col grid-cols-4 gap-x-4">
    {props.children}
  </ul>
)
```

```jsx
const Podcast = (props: Props) => (
  <div className="text-sm">
    <Image
      alt={props.title + ' ' + props.description}
      width={200}
      height={200}
      className="rounded-lg mb-2"
      src={props.image}
    />
    <p className="font-bold">{props.rank}</p>
    <p>{props.title}</p>
    <p className="opacity-60">{props.description}</p>
  </div>
)
```

```jsx
const EpisodeList = (props: Props) => (
  <ul className="grid gap-2">{props.children}</ul>
)
```

```jsx
const Episode = (props: Props) => (
  <div className="flex flex-row gap-x-4 items-start text-sm">
    <Image
      alt={props.title}
      width={90}
      height={90}
      className="rounded-lg"
      src={props.image}
    />
    <p className="font-bold">{props.rank}</p>
    <div className="flex-1 pb-4 border-b-[1px]">
      <p className="text-xs font-semibold opacity-60">{props.publishedAt}</p>
      <p className="font-semibold py-1">{props.title}</p>
      <p className="text-xs opacity-60">{props.duration}</p>
    </div>
  </div>
)
```

</details>

#### Build the rendering engine

This is where the magic happens 🪄. We are going to implement our rendering engine by **traversing** the **component tree** and **matching each node** with the corresponding **component**.

To do that, first we define a map of components that we will use to match the `type` of each node with every component.

```jsx
import Title from './components/Title'
import SectionTitle from './components/SectionTitle'
import PodcastList from './components/PodcastList'
import Podcast from './components/Podcast'
import Episode from './components/Episode'
import EpisodeList from './components/EpisodeList'

const SDUI_COMPONENTS = {
  EpisodeList,
  PodcastList,
  Podcast,
  Episode,
  SectionTitle,
  Title,
} as const
```

Then, we create a component that using **recursion** will **traverse** the **tree** and render it. In case you're not familiar with _recursion_ here's a [video from Sam Selikoff](https://www.youtube.com/watch?v=6UU2Ey4KZr8) that explains it very well.

```jsx
const SduiRenderer = ({ component }) => {
  const Component = SDUI_COMPONENTS[component.type]

  if (!Component) return null

  return (
    <Component {...component.props}>
      {component.children?.map((component, idx) => (
        <SduiRenderer key={`c-${idx}`} component={component} />
      ))}
    </Component>
  )
}

const Page = () => {
  return data.map((component, idx) => (
    <SduiRenderer key={`b-${idx}`} component={component} />
  ))
}
```

Here's how all the pieces come together 🕹️, feel free to play around with the response to see how the user-interface reacts 😜

<iframe src="https://stackblitz.com/edit/server-driven-uis?embed=1&file=app%2Fdata%2Findex.tsx&theme=light&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"></iframe>

### Benefits of Server-Driven UIs

#### Immediate changes and faster iterations

Server-Driven UIs allow you to **push immediate bug fixes** ⚡️ and updates **without** having to **release** an **update** to the clients.

This is especially useful in environments like mobile apps, where updates typically require going through a review process and waiting for users to install the new update.

#### Reduce client-side complexity

By **shifting** the **UI logic** 🧠 to the **server**, Server-Driven UIs make the **client** ligther and **simpler** 🍰. The client only needs to focus on rendering the components provided by the server.

#### Dynamic user-interfaces

Defining the UI on the server enables highly adaptable and dynamic interfaces that can be tailored on-the-fly 🎯, such as:

- **Personalization**: Customize layouts and content for different user segments, devices, or use cases.

- **A/B Testing**: Experiment with different designs and features by serving different variants to user groups.

- **Release flags**: Gradually roll out new features by enabling them for a subset of users.

### Challenges of Server-Driven UIs

1. **State management** 🤹: Synchronizing state between the client and the server can be challenging, specially when dealing with complex interactions as the server needs to keep up with the client's state and update the UI accordingly.
2. **Offline support** 🛜: Server-Driven UIs rely on the server, managing the user experience when offline can be challenging. Caching and pre-fetching stategies can help mitigate this.
3. **Performance considerations** ⚡️: Efficient network requests, payload optimization, low latency along with a good client-side rendering performance are crucial to ensure a smooth user experience.

### Conclusion

Server-Driven UIs represent a paradigm shift in how we approach user interface development, offering a powerful tool for building dynamic and flexible apps ❤️.

However it's key to asses whether SDUI aligns with your project's needs and constraints. It's not a one-size-fits-all, but for the right use cases—such as content-heavy user-interfaces and apps requiring frequent updates it can significantly enhance delivery speed.
