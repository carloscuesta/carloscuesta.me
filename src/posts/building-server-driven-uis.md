---
dateModified: '2024-10-04 10:00'
datePublished: '2024-10-04 10:00'
disqusIdentifier: 'building-server-driven-uis'
excerpt: ''
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1620078331/blog-featured-images/composing-uis-with-fsm.png'
title: 'Building Server-Driven UIs'
---

**Server-Driven UIs** also known as _SDUI_ is an architectural pattern that aims to reduce client-side complexity by building user-interfaces from the server over APIs. This approach is transforming the way apps are developed, fostering dynamic and flexible UIs.

This is not just theory. Some of the biggest names in the tech industry adopted Server-Driven UIs, such as: [Airbnb](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5), **Instagram** and [Shopify](https://shopify.engineering/server-driven-ui-in-shop-app) to name a few.

In this article we will explore what are Server-Driven UIs, their benefits, and how to implement them 🙏

### Understanding Server-Driven UIs

The best way to understand Server-Driven UIs is by comparing it with the traditional approach.

In the **traditional** world, the **data** comes from the **server**, which acts as the source of truth and the **UI** is **driven** by **each** of those **clients** (Web, iOS, Android). Each client is responsible for fetching the data and transforming it into a user-interface.

With **SDUI**, the **definition** of the **user-interface** **shifts** from the client **to the server**, unifying this logic for all of them. The clients will **fetch the UI** from the server and **render it**.

Let's illustrate this with an example, using the Apple Podcasts [webapp](https://podcasts.apple.com/us/charts?genre=1318):

![Apple Podcasts – Top Technology Podcasts](https://res.cloudinary.com/carloscuesta/image/upload/v1727631184/building-sdui-podcasts.jpg)

Now, let's represent the user-interface of the _Top Technology Podcasts_ page using a JSON to simulate the server response:

#### Traditional

A contract is defined between the client and the server, adhering to a specific structure and shape.

The client will fetch the **data** from the server and will transform it into a user-interface.

<details>
  <summary>Reveal JSON 👈</summary>

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

</details>

#### Server-Driven UI

Whereas, with _SDUI_ the server will send a **tree**-like **structure of components** to the client. Each component represents a part of the UI and contains information about what to render and the properties the component needs.

The client will **traverse** this **tree**, rendering each component as specified by the server.

<details>
  <summary>Reveal JSON 👈</summary>

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

</details>

#### Traditional 🆚 Server-Driven UIs

In the **traditional** approach, the focus is primarily on the **data**, where the client is responsible for fetching and transforming it into a user-interface.

On the other hand, **Server-Driven UIs** shift the focus to the **user-interface** itself. The server is responsible for defining the components tree and the client's role is to render the tree as it is.

### Building Server-Driven UIs

![SDUI Component Tree](https://res.cloudinary.com/carloscuesta/image/upload/v1727786653/building-sdui-tree.jpg)

### Benefits of Server-Driven UIs

#### Immediate changes and faster iterations

Server-Driven UIs allow you to **push immediate bug fixes** and updates **without** having to **release** an **update** to the clients.

This is especially useful in environments like as native mobile apps, where updates typically require going through a review process and waiting for users to install the new update.

Changes made on the server will be reflected instantly on the client side.

#### Reduce client-side complexity

By **shifting** the **UI logic** to the **server**, Server-Driven UIs make the **client** ligther and **simpler**. The client only needs to focus on rendering the components provided by the server.

This helps clients to be more maintainable as they no longer need to manage UI or layout logic.

#### Dynamic user-interfaces

Defining the UI on the server enables highly adaptable and dynamic interfaces that can be tailored on-the-fly, such as:

- **Personalization**: Customize layouts and content for different user segments, devices, or use cases.

- **A/B Testing**: Experiment with different designs and features by serving different variants to user groups.

- **Release flags**: Gradually roll out new features by enabling them for a subset of users.

### Challenges of Server-Driven UIs
