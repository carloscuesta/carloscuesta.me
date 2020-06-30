---
dateModified: "2019-09-12 17:00"
datePublished: "2019-09-12 17:00"
disqusIdentifier: "5d78d0fcf942665cd6becd9a"
excerpt: "I'm going to explain why it's important and how you can use error boundaries in a React-Native application to improve error resiliency 👨‍💻"
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/Managing_React-Native_crashes_with_Error_Boundaries.png"
title: "Managing React-Native crashes with Error Boundaries"
---

[React 16](https://github.com/facebook/react/blob/master/CHANGELOG.md#1600-september-26-2017) released a new concept called [**Error Boundary**](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries). This concept introduces a new way to catch **JavaScript errors** 🐛 in a React project.

In this post I'm going to explain why it's important and how you can use error boundaries in a React-Native application to improve error resiliency, so let's get into it! 👨‍💻

### Why you should use them ?

According to the [official React docs](https://reactjs.org/docs/error-boundaries.html#new-behavior-for-uncaught-errors) 📘:

> As of **React 16**, **errors** that were **not caught** by any **error boundary** will **result** in **unmounting** of the **whole** React **component tree** 😱.

**Unmounting** the **whole** React **component** tree, **means** that if you don't catch errors at all the **user** will **see** an **empty white screen** 💥. Most of the time without having any feedback. This is not a great UX ❌, fortunately you can **fix** this by **using** Error Boundaries ✅.

![React-Native unmounted component tree error](https://res.cloudinary.com/carloscuesta/image/upload/react-native-error-unmounted-tree.png)

### How to use Error Boundaries

To benefit from Error Boundaries, we'll have to **create** a **stateful component** that will use the following lifecycle methods ♻️:

- [`getDerivedStateFromError`](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror): This method is going to update the component state to display a fallback UI.
- [`componentDidCatch`](https://reactjs.org/docs/react-component.html#componentdidcatch): This method should be used to log the error to an external service.

So let's create the component that will catch errors in our application:

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    logErrorToService(error, info.componentStack)
  }

  render () {
    return this.state.hasError
      ? <FallbackComponent />
      : this.props.children
  }
}
```

Pretty **simple** right? With a few lines of code, you can catch errors on your React-Native app 🎉

To use it, all you need to do now is to **wrap it around any component that could throw an error**.

```jsx
const App = () => (
  <ErrorBoundary>
    <Children />
  </ErrorBoundary>
)
```

This component will catch **all the errors** that are thrown by **any** of his **children**. A common thing is to use it at the **top level of your application** 🔝 to catch anything without having to use it on every screen or route 👏

That's how our `FallbackComponent` looks whenever an error is thrown by our application 😍

![react-native-error-boundary](https://res.cloudinary.com/carloscuesta/image/upload/react-native-error-boundary.png)

⚠️ **Error Boundaries only catch JavaScript errors**, all the native crashes that your application might have are not handled.


### Introducing [`react-native-error-boundary`](https://github.com/carloscuesta/react-native-error-boundary)

Few months ago, I created a **simple**, **flexible** and **reusable** React-Native **error boundary component**. [Take a look into it](https://github.com/carloscuesta/react-native-error-boundary) 👀 if you're thinking about adding error boundaries to your app!
