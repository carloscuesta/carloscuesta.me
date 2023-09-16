---
dateModified: '2017-09-07 10:00'
datePublished: '2017-09-07 10:00'
disqusIdentifier: '22'
excerpt: "Building native applications with React is awesome. Until the time you have to release a new build. That's when Fastlane comes to the rescue!"
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593531858/blog-featured-images/Shipping_React_Native_apps_with_Fastlane.png'
title: 'Shipping React Native apps with Fastlane'
---

Building native applications with [**React**](https://facebook.github.io/react-native/) (_JavaScript_) is awesome ❤️. Until the time you have to **release a new build**, specially, if you are not an `iOS` or `Android` native developer. The process of **shipping manually** an application to the stores **is** a **painful** and **time consuming** experience, even though it's documented.

That's when [**Fastlane**](https://fastlane.tools) comes to the rescue ⛑! In this post I'll explain how to automate the release process for an `iOS` 🍏 and `Android` 🤖 application. Handling the most common tasks such as: **Code signing**, **App builds**, **Beta distribution** and much more! Actually **we use** **Fastlane** at [**Ulabox**](https://www.ulabox.com) for building our react-native apps.

> Fastlane is the tool to release your iOS and Android app
> It handles all tedious tasks, like generating screenshots, dealing with code signing, and releasing your application.

### Getting Started

Before [installing Fastlane](https://github.com/fastlane/fastlane#installation) make sure you have the latest Xcode command line tools installed, then install Fastlane ⬇️.

```bash
$ brew install fastlane
```

Once installed, create a `fastlane/` 📁 folder inside of your react-native project at the _root level_. Then, create a file called `Fastfile` within this directory ☝️.

The **Fastfile** is the place where we're going to code the **lanes**. A lane contains a **group** of [**actions**](https://docs.fastlane.tools/actions/#code-signing) that will be executed synchronously in order to automate a process. An **action**, is a **function** that performs a task.

Let's get started with this `Fastfile` base template, as you can see there's a `before_all` hook, that basically performs a **health check** 👨‍⚕️, with three actions, to ensure that you're on the **latest** `master` branch with a **clean** status.

```ruby
fastlane_version '2.53.1'

before_all do
  ensure_git_branch
  ensure_git_status_clean
  git_pull
end

platform :ios do
   # iOS Lanes
end

platform :android do
  # Android Lanes
end
```

Also we've defined the **two platforms** that we're going to use 🍏 and 🤖 which **will contain** the **specific lanes** for **each context**. Having the [platforms](https://github.com/fastlane/fastlane/blob/master/fastlane/docs/Platforms.md) defined allows us to execute lanes like that: `fastlane ios lane` `fastlane android lane`.

### Code sign

#### iOS

The best way to code sign it's **[match](https://docs.fastlane.tools/actions/match/)**, before integrating match into a lane you have to:

1. [Nuke](https://docs.fastlane.tools/actions/match/#nuke) the existing profiles and certificates.
2. [Setup match](https://docs.fastlane.tools/actions/match/#setup) through the `init` option.
3. Create a lane on the `ios` platform that uses match.

```ruby
desc 'Fetch certificates and provisioning profiles'
lane :certificates do
  match(app_identifier: 'com.app.bundle', type: 'development', readonly: true)
  match(app_identifier: 'com.app.bundle', type: 'appstore', readonly: true)
end
```

Now you can run `fastlane ios certificates` or use `cerfiticates` as a function in another lane. `match` will automagically save the provisioning profiles and certs on your OS X Keychain.

#### Android

**Automatically** when you **build** an **Android** application using the `assemble` task in `Release` mode the **application** will be **signed**. But first you need to generate or fetch the signing key and add it to the project, so take a look at [this facebook guide](https://facebook.github.io/react-native/docs/signed-apk-android.html) to know how to do it.

### Build

#### iOS

To generate a **signed build** we're going to create a lane that uses the `cerficates` lane that we've created before and **[gym](https://github.com/fastlane/fastlane/tree/master/gym)** to **compile** our **application**. At the end of the process we want to increment the build number in order to ship our application to **beta testing** services.

```ruby
desc 'Build the iOS application.'
private_lane :build do
  certificates
  increment_build_number(xcodeproj: './ios/name.xcodeproj')
  gym(scheme: 'name', project: './ios/name.xcodeproj')
end
```

#### Android

To generate a signed `.apk` we're going to create a `build` lane. As you can see we're using the **gradle** action, to clean the project and assemble a release build, with gradle tasks.

```ruby
desc 'Build the Android application.'
private_lane :build do
  gradle(task: 'clean', project_dir: 'android/')
  gradle(task: 'assemble', build_type: 'Release', project_dir: 'android/')
end
```

Then **automate** the `versionCode` bump, by hooking up the `assembleRelease` [with this little task](https://gist.github.com/carloscuesta/678668da906bb80bdd22c8fd690c4fc4).

### Beta distribution

#### iOS

**[Testflight](https://developer.apple.com/testflight/)** ✈️ is the way to go when it comes to iOS beta testing. Works really good, though the _Developer Portal_ is slightly confusing. With **[pilot](https://github.com/fastlane/fastlane/tree/master/pilot)** we can **manage** our **TestFlight builds**.

The `beta` lane will use the `build` lane to provide a signed `.ipa` to Pilot, then is going to commit and push the changes produced by increasing the build number and finally will upload the **local** build to **Testflight**. 🎉

```ruby
desc 'Ship to Testflight.'
  lane :beta do
    build
    pilot
    commit_version_bump(message: 'Bump build', xcodeproj: './ios/name.xcodeproj')
    push_to_git_remote
  end
```

#### Android

**Android** uses the **[Playstore](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en)** to share `beta` builds. We can automate that with fastlane too!

The `beta` lane for Android is nearly the same as iOS, uses the build lane to generate the signed `.apk`, commits the `versionCode` changes and using **[supply](https://github.com/fastlane/fastlane/tree/master/supply)** **promotes** the **local** build to Playstore as a _beta release_. ✨

```ruby
desc 'Ship to Playstore Beta.'
  lane :beta do
    build
    supply(track: 'beta', track_promote_to: 'beta')
    git_commit(path: ['./android/gradle.properties'], message: 'Bump versionCode')
    push_to_git_remote
  end
```

### Integration as scripts

I strongly recommend to add **fastlane** as [`npm scripts`](https://docs.npmjs.com/misc/scripts) to make it part of your current build system.

```json
"scripts": {
  "ios:beta": "fastlane ios beta",
  "android:beta": "fastlane android beta"
}
```

And that's all! Kudos to **[Felix Krause](https://twitter.com/krausefx?lang=es)** and all the people behind Fastlane 👏

### Automating deployments

If you want to know how to automate this process into a [Continuous Delivery system take a look at this post](https://carloscuesta.me/blog/shipping-react-native-fastlane-travis/) 👀
