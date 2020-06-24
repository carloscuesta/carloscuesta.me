---
dateModified: "2017-09-14 11:45"
datePublished: "2017-09-14 11:45"
disqusIdentifier: "24"
excerpt: "React Native meets CodePush, a cloud service ideal for pushing instantly bug fixes and new features to a react-native application."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1505032166/en5fjew0zzealxy9dvja.png"
title: "React Native meets CodePush"
---

[**CodePush**](https://microsoft.github.io/code-push/) is a cloud service from Microsoft that gives us the ability to instantly **push updates** to a react-native application. **Ideal** for addressing **bugs** and introducing **small features**.

### Getting started

**Install** the [`code-push`](https://www.npmjs.com/package/code-push-cli) command line tool and **create** an **account**. 👇

```bash
$ npm i -g code-push-cli
$ code-push register
```

#### Create a CodePush application

In order to **associate** our **application** with **CodePush** we have to **register** it. This process needs to be done **one time per each platform**.

```bash
# code-push app add <appName> <os> <platform>
$ code-push app add codePushRN-ios ios react-native
```

![CodePush add app deployment keys](https://res.cloudinary.com/carloscuesta/image/upload/v1505033866/fbvjm5jbshllzoxitknw.png)

Having said that, if you ship to iOS and Android, you'll end up with two CodePush applications `codepush-iOS` `codepush-android`, with their own deployment keys respectively. 🔑

### Integration

Add `react-native-code-push` as a **dependency** to your project and then link it 📦. At the time of **linking** **you'll be asked** for the **deployment key** obtained from registering your application on CodePush.

Provide the `Production key` if you don't want a `Staging` environment, incase you need it [setup multi-deployment](http://microsoft.github.io/code-push/docs/react-native.html#link-8).

```bash
$ yarn add react-native-code-push
$ react-native link react-native-code-push
```

Now it's time to **CodePush-ify** our application. Basically we have to **wrap** our app **root component** with the **codePush** **HOC**. 🔫

```javascript
import codePush from 'react-native-code-push'

class App extends React.Component {}

App = codePush(App)
```

### Release and Deploy

Once you have integrated CodePush, the **simplest** way to **deploy** a **production build**, is to use the `code-push release-react` command: 🚀

```bash
# code-push release-react <appName> <platform> [options]
$ code-push release-react codePushRN-ios ios -d Production
```

If you work with `Staging` and `Production` environments, **first** you need to **ship** 🚢 a **staging** release and then **promote** it to **production**.

```bash
$ code-push release-react codePushRN-ios ios
$ code-push promote <appName> Staging Production
```

After making a deployment, you can list the install metrics and metadata of the update. 📈

```bash
$ code-push deployment ls <appName>
```
![codePush deployment list](https://res.cloudinary.com/carloscuesta/image/upload/v1505066296/yoioqwxipsdlhoriacax.png)

#### Update and Install policies

By **default**, **CodePush** will **check for updates** on **every app start**, if an **update** is **available**, it will be **silently downloaded** and **installed** the next time the **app** is **restarted** ⬇️. The check frequency can be modified as well as the install policy.

##### Demo

I've created a **demo application** for this post, to **show** how **CodePush works**. CodePushRN is installed in `Release` mode into my iOS Simulator in order to emulate a real use case.

The first time we open the app, as you can see at the metrics screenshot, CodePush checks for updates and silently downloads a new one. As I said before, on the next app start the update will be installed. 💯

<img src="https://res.cloudinary.com/carloscuesta/image/upload/v1505066571/vmv0aqiqu0y0l0evthd7.gif" alt="react-native codepush demo" style="width:374px;display:block;margin:auto;">

### Limitations

- Modifications of the **native code** such as `AppDelegate.m`, `MainActivity.java` and others cannot be distributed via code push. Those changes **require a re-build** of the binary. ⚒

- On iOS the bug fixes and **features** released with CodePush should **maintain** the **app's original/presented purpose**. ⚠️ [Section 3.3.2 Apple developer agreement](https://developer.apple.com/programs/ios/information/iOS_Program_Information_4_3_15.pdf).
