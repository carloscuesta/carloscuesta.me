---
dateModified: "2018-10-15 09:53"
datePublished: "2018-09-19 09:53"
disqusIdentifier: "5ae59dcdb3211a06522ad69b"
excerpt: "The process of continuously delivering React Native apps with Fastlane and Travis CI automatically. "
image: "https://res.cloudinary.com/carloscuesta/image/upload/shipping-react-native-fastlane-travis.png"
title: "Shipping React Native apps with Fastlane and Travis"
---

A year ago [I wrote a post](https://carloscuesta.me/blog/shipping-react-native-apps-with-fastlane/) about how Fastlane could help us to improve our **React Native** apps shipping process. At that moment even though everything was automated, the **deployment** **relied** on **one of us** with a **provisioned machine** in order to launch the rocket 🚀. We could **improve** **easily** that process **by** **continuously delivering** our apps through a **CI machine**. That's when [Travis CI](https://travis-ci.com) comes to the rescue! 👷🏻‍♂️

### The process

Before explaining what's the problem, it's important to **understand** the **complexity** of our deployment process.

In a nutshell we have **two platforms**: _iOS_ 🍏, _Android_ 🤖 and every platform compiles two applications: Beta testing app also known as **Canary** 🐤 and **Production** 🚀 one.

Basically every platform goes through a lane sequantially that looks like this 👇

- [Code sign setup](#codesignsetup) ✍️
- [Version management](#versionmanagement) 🔖
- [Native builds](#nativebuilds) 📦
- [Beta testing distribution](#betatestingdistribution) 🐤
- [Stores distribution](#storesdistribution) 🚀
- [Sourcemaps](#sourcemaps) 🗺
- [Communication](#communication) 🗣

Now let's see in depth every step of the deployment process to understand what we do.

#### Code sign setup ✍️

**Signing** native applications **is scary** 😱, specially when you come from the JavaScript ecosystem. Certificates, provisioning profiles, keys... You have to be utterly organized when using them in a development team.

We adopted the [codesigning.guide concept](https://codesigning.guide) through [_Fastlane_](http://fastlane.tools). Basically this idea comes up with having a specific **git repository** to **store** and **distribute** certificates across a development team. We store both **iOS** and **Android** code signing files on an encrypted private git repository that lives on GitHub.

Then, our **CI** machine on every deploy **clones** the **repository** and **installs** the decrypted certificates. On **iOS** the CI creates an [*OS X Keychain*](https://en.wikipedia.org/wiki/Keychain_(software)) where the certificates are installed.

#### Version management 🔖

**Native builds** and stores **require** code **version bumps**.

Every platform has his own way to manage versions and build numbers. The difference between those two is that the **version** should be used as the **public store number** that identifies a new release, and the **build number** is an incremental identifier that bumps on every build.

**Android** 🤖

- Public version number: `versionName`
- Build numbers: `VERSION_CODE`

**iOS** 🍏

- Public version number: `CFBundleShortVersionString`
- Build numbers: `CFBundleVersion` and `CURRENT_PROJECT_VERSION`

Those attributes are stored on `.plist`, `.pbxproj`, `.properties` and `.gradle` files. To automate and do version management we use the [**package.json** **version** number](https://docs.npmjs.com/files/package.json#version) as the **source of truth** for our **public version numbers** 💯. This allows us to use [`npm version` cli command](https://docs.npmjs.com/cli/version) to manage bumps.

#### Native builds 📦

We need to **provision** two **machines** to build and compile our native applications.

For **iOS** we setup a **macOS system** with **Xcode**, because it's the only way to compile and sign the application. On **Android** we provision a **Linux** system, with all the **Android Studio**, packages and tools that we need.

Those machines are **created** by our **CI**, that means every build runs on a new **fresh** and **clean** environment 💻.

#### Beta testing distribution 🐤

To **distribute** the **application** to **beta testers** we use [TestFlight](https://developer.apple.com/testflight/) on **iOS** and [HockeyApp](https://hockeyapp.net) for **Android**. We tried _Google Play Beta_ but it was too slow on the app roll out compared to HockeyApp.

#### Stores distribution 🚀

To **distribute** the **application** to the **stores** we upload the production build to [TestFlight](https://developer.apple.com/testflight/) on **iOS** and [Google Play Store](https://hockeyapp.net) for **Android**. The release is done manually by a human being.

#### Sourcemaps 🗺

To get human readable information about crashes and errors, we use a service called [Bugsnag](http://bugsnag.com). Every time we deploy a new build, we need to **upload** **debug symbols** `.dSYM` and **sourcemaps** to Bugsnag.

#### Communication 🗣

Finally, when the apps are deployed, we need to **inform** our **beta testers**, **release manager** and **developers**, that we have a new version. We use [Slack](https://slack.com/) with a bot that sends alerts to some channels.

### The problem

Every time we **wanted** **to** do a **release**, we had to **manually fire** 🔥 the **Fastlane** deployment lanes. That means that **human factor** was needed. This was a **time consuming** process that often failed due to code sign, biased environments, software updates, native platform dependencies...

> #### **Machines** should **work**, **people** should **think**.

Definitely we decided to **end** with those **problems** by **automating all the things**!

### The solution

The solution is to implement this **automated process** into a system that **[continously delivers](https://en.wikipedia.org/wiki/Continuous_delivery)** our `master` branch pushes up to the stores magically 🎉, giving freedom to the manager to decide when a new release comes up. Finally, we could forget about everything and be happy! ❤️

Now we're going to **take a look** on how we **integrated** _Travis_ and _Fastlane_ to **automate** the **deployment** of our apps 👏.

#### Fastlane

We have two `deployment` lanes one for Android and one for iOS. I've simplified the lanes a little bit for the explanation to focus on the important parts of it. First we deploy Android platform and then iOS.

The **lane** **receives** a **version** number that comes from the `package.json`, as I said before this allows us to do versioning through npm.

The **first** thing we do is **bumping** the **public** **version** number and the **build number**. On the **iOS** lane, we need to `setup_certificates`, to save them on the Keychain and be able to sign the apps.

After that we start the `canary` 🐤 and `production` 🚀 lanes. Those two are the ones who **build** the **native app**.

- `Canary`: Beta testing build, ships to _TestFlight_ and _HockeyApp_.
- `Production`: Production build, ships to _TestFlight_ and _Google Play Store_.

Then, we **upload** all the **sourcemaps** and **debug** symbol **files** to _Bugsnag_.

Next, we create a **git branch** where the **version bumps** will be **commited**, through the `commit_and_push_version_bump` lane. Later, on the iOS lane we **merge** the created **git branch** on top of `master` using the `git_flow_merge` lane. We need to commit the bumps, in order to maintain the version along with the deployments. Otherwise the stores should throw an error that the uploaded version already exists!

Finally we **reach** out **Slack**, to **communicate** both **deployments**.

**Android** 🤖

```ruby
lane :deployment do |version: version|
  bump_version_number(version: version)
  canary
  production
  sh 'npm run repositories:upload:android'
  commit_and_push_version_bump
  slack_notification(platform: 'Android', version: version)
end
```

**iOS** 🍏

```ruby
lane :deployment do |version: version|
  setup_certificates
  bump_version_number(version: version)
  canary
  production
  sh 'npm run repositories:upload:ios'
  commit_and_push_version_bump
  git_flow_merge(version: version)
  slack_notification(platform: 'iOS', version: version)
end
```

So, here's how our git log, looks like after merging a branch to `master` and making a deploy 🙌:

![GitHub log](https://res.cloudinary.com/carloscuesta/image/upload/ghlog.png)

#### Travis CI

We use **[build stages](https://docs.travis-ci.com/user/build-stages)**, to run our deployment process in **three steps**, **sequentially**. This allows us to **deploy** our **apps** **only** on the `master` branch when our **tests passed** ✅.

Let's take a look at the build stages 👇

![travis-build-stages](https://res.cloudinary.com/carloscuesta/image/upload/travis-build-stages.png)

Every **build stage** has his **own** **provisioning** and **enviroment**. For instance, `Deploy iOS` runs on a [macOS machine](https://docs.travis-ci.com/user/reference/osx/) with Xcode and Node.js installed, while `Deploy Android` uses an [Ubuntu machine](https://docs.travis-ci.com/user/languages/java/) with JDK, AndroidSDK and Node.js.

**Test stage** ✅

On the **first stage** we execute the **linters** and **test suites**. To ensure everything is working as expected. If something fails here, we automatically stop the deploy.

```yml
- stage: Test and lint ✅
  language: node_js
  node_js: 8.5.0
  install: yarn
  script: npm run test:lint && npm run test:unit
```

**Android stage** 🤖

Android stage **creates** a **provisioned** [Ubuntu machine](https://docs.travis-ci.com/user/languages/java/) with all the software and dependencies needed. Then we build the Canary 🐤 and Production 🚀 applications apps. After that we deploy them. In around 15 minutes ⏰ our Android apps ship. 👏

```yml
- stage: Deploy Android 🤖
  if: branch = master AND type = push
  language: android
  jdk: oraclejdk8
  android:
    components:
      - tools
      - platform-tools
      - android-26
      - extra-google-m2repository
      - extra-google-google_play_services
  before_install:
    - nvm install 8.5.0
    - gem install bundler
    - bundle install
  before_script:
    - ./internals/scripts/travis/gitconfig.sh
  install: yarn
  script: npm run deployment:android
  ```

**iOS stage** 🍏

iOS stage **creates** a **provisioned** [macOS machine](https://docs.travis-ci.com/user/reference/osx/) with Xcode and all the dependencies needed. Then we build the Canary 🐤 and Production 🚀 apps. After that we deploy them. In around 20 minutes ⏰ our iOS apps ship. 👏

```yml
- stage: Deploy iOS 🍏
  if: branch = master AND type = push
  language: node_js
  node_js: 8.5.0
  os: osx
  osx_image: xcode9.2
  before_install: bundle install
  before_script:
    - ./internals/scripts/travis/gitconfig.sh
  install: yarn
  script: npm run deployment:ios
```

### Lessons learned

- **Avoid human factor** as much as you can, by **automating all the things**!
-  Native ecosystem is tough, sometimes kind of frustrating and you should accept that. It's not our expertise since we're JS devs, but there's a lot of people and documentation that helps out.
-  Make **processes**.
