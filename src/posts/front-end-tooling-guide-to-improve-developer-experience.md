---
dateModified: "2021-02-22 10:00"
datePublished: "2021-02-22 10:00"
disqusIdentifier: "frontend-tooling-guide-to-improve-developer-experience"
excerpt: "Let's talk about how we can use frontend tools to improve the developer experience in our team and how these tools impact the reliability of shipping value into production."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1613908204/blog-featured-images/frontend-tooling-improve-dx.png"
title: "The frontend tooling guide to improve Developer Experience"
---

Let's talk about how we can use frontend tooling to improve the **developer experience** in our team and how these tools impact the reliability of shipping value into production **safer** and **faster**.

Have you ever been on a situation where your team had to **quickly fix a bug** on production or **struggled** to **deploy** a new **feature reliably**?

Keep reading then! All those problems usually indicate that you don't have the proper tools. In this article I'll give you the tools your team needs to create a high-velocity development environment for frontend applications.

### Table of Contents

### What is Developer Experience ?

**D**eveloper **E**xperience _in this context_, is everything that happens in between programming and the outcome of the code.

Starting from the first line of code that is written on the editor and ending when the code is shipped and available to our users. Is the literal feeling a developer has when coding.

Think about all those little things that help you to code better without having to put any attention on them.  

A few examples and common use cases of _DX_ would be:

- An engineer writes code that it's not typed and a tool warns about it.
- An application that is _[hot reloaded](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading)_ every time the code changes.
- An automation that deploys your changes into production.

### The impact of having a great DX

Having a great DX has a significant influence in your development speed. How? It's simple, as soon as you rely on automated proceses and tools, the people on your team will start to feel more confident.

Trust, empowers developers to be more productive and agile 🧠, forgetting about the fear of change. So you will be able to bring value much more faster to your users.

**Automation** is the **key** to **build** a **high-velocity** development **team**.

Think of it as giving **superpowers** 🦸‍♂️ to people. With the proper tools your team will be able to:

- Deliver value to production fast ⚡️
- Anticipate and fix bugs 🐛
- Optimise the development time of engineers ⌚️
- Build consistent and high quality codebases 🥇
- Leave fear of change behind 😍

Sounds awesome right? Let's dive into it! 🛠

### A tool for every problem

Before starting to analyze what we are going to use, is important to understand that the election of a tool depends totally on the problem that needs to be addressed.

As **Abraham Maslow** said, on the _[law of the instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument)_:

> "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail."

The following quote 👆 is **highly relevant** on the **programming context**. Many times as software engineers we tend to use the same known tools for any new project, no matter what the constraints and requirements are.

This is a comfort zone bias. We decide to not change or even consider a new tool to avoid risk.

The problem is that we're limiting our knowledge and the ability to discover more efficient instruments, because we can't compare them against anything.

### Tools

Let's start exploring the tools that will help us to build an awesome DX on our team. We will start from the ones that require less effort and provide more impact.

I've made up a little graphic to represent the impact every tool is going to have on the DX of your team against the effort it requires to be used.

![Front End Tools DX Impact-Effort Chart](https://res.cloudinary.com/carloscuesta/image/upload/v1613417482/dx-chart_dtwtsc.png)

#### Linters and formatters

Linters and formatters are **essential** to **maintain** a **consistent** codebase. When it comes to writing code every team member should follow the same style, rules and conventions. **Consistency** is key in a project.

You don't want to have different code styles depending on who's writing the code. It's better to agree on a style to avoid confusion. Think about onboarding a new team member, it's will be much easier if the coding convention is well defined with clear rules.

What's the **difference** then between a **linter** and a **formatter**?

Most of the time, you can use both of them for the same purpose, which is to find code errors, bugs and automatically format the code based on the given style guide. However there's a subtle difference:

- **Linters**: Find and catch unexpected coding errors.
- **Formatters**: Format and structure the code with the given style.

**Recommended tools**

This is the list of linters and formatters I use that I would recommend:

- [ESLint](https://eslint.org): Pluggable JavaScript linter.
- [Prettier](https://prettier.io): An opinionated code formatter. Works with `.css` files too! 🎉
- [StandardJS](https://standardjs.com): JavaScript style guide, linter, and formatter

💡 **Protip**: Run linters and formatters on a [`pre-commit` git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) using [Husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) to make sure that the code is readable and formated **before** the code review process 😍

#### Static typing

JavaScript is a [_weakly typed_](https://en.wikipedia.org/wiki/JavaScript) programming language. Due to it's nature this can cause unexpected bugs and errors. A **static type checker** will help your team to **write code faster** and more **confidently**.

Since we started to use static type checkers on the team, we began to code and refactor a lot faster while feeling much more safer.

**Recommended tools**

This is the list of static type checkers I use that I would recommend:

- [Flow](https://flow.org/): A static type checker for JavaScript.

💡 **Protip**: You can also run `flow` type checks on a `pre-commit` hook basis, as suggested on linters and formatters.

#### Performance and accessibility audits

Performance and accessibility are two important values we should be **accountable** for as Software Engineers. Although this does not have a big impact on _DX_, the outcome is part of our programming process, so we should measure and improve our [a11y](https://www.a11yproject.com/) and performance constantly.

These are the most **relevant values** for your users. Keep in mind, that whenever a user enters your site or application, the first thing they will feel is the overall performance of the site, how fast it loads, how fast is to navigate through, the way it works and integrates with screen readers etc.

So for me, makes a lot of sense using a tool to audit and monitor performance and a11y to ensure they met the standard requirements.

**Recommended tools**

This is the list of tools I use for auditing performance and accessibility I would recommend:

- [Lighthouse-CI](https://github.com/GoogleChrome/lighthouse-ci): Automate running Lighthouse for every commit, viewing the changes, and preventing regressions.

💡 **Protip**: It's a great idea to include this audit as a step of your Pull-Request checks. We will introduce this concept on the next section.

#### Unit testing

The aim for unit tests is to ensure that individual and isolated pieces of your codebase work properly. Also they act as a layer of protection against the passage of time. As long as the test exists the behaviour of those units will be guaranteed.

So then it's impossible break those individual pieces by accident on a refactor or when introducing some changes.

**Unit tests** should be **fast to run**. Some examples and use cases where I use unit tests:

- **Components**: Ensure that isolated components are working as expected on their own.
- **Utility functions**: We usually build a lot of helpers and wrappers to create abstractions in our projects. To ensure they work as expected with all the uses cases, you should be unit testing them.
- **Sagas**: Audit the steps and behaviour of your asynchronous flows in your application.

**Recommended tools**

This is the list of tools I use for unit testing I would recommend:

- [Jest](https://jestjs.io): A delightful JavaScript Testing Framework with a focus on simplicity.
- [Jest-Extended](https://github.com/jest-community/jest-extended): Additional Jest matchers

#### Integration testing

Integration testing is about checking the behaviour of unit pieces grouped together. In my opinion, this is where **most of your focus should be when writing tests**.

Why? Considering the **time and effort** it takes to **write tests** compared to the **level of confidence** they give back to you, **integration** tests are merely the best.

Unit tests are great but they give you low confidence results, think about the [umbrella example](https://twitter.com/erinfranmc/status/1148986961207730176) 🌂

Some examples and use cases where I use integration tests:

- **User interactions**: Simulate user interactions through events as if you were a user. For example, on an e-commerce site add a product to the cart and assert that an API request has been made and the product items count has been increased.
- **Forms**: Fill forms in different ways, simulate a form submit and validate the data, make the form fail and assert the errors.
- **Navigation**: When the user clicks on something, are we navigating to the expected screen?

**Recommended tools**

This is the list of tools I use for integration testing I would recommend:

- [Jest](https://jestjs.io): A delightful JavaScript Testing Framework with a focus on simplicity.
- [Testing-Library](https://testing-library.com): Simple and complete testing utilities that encourage good testing practices.
- [React-Test-Renderer](reactjs.org/docs/test-renderer.html)

#### End to end testing

When it comes the time to guarantee the behaviour of **key user flows** on a product, for example on an E-commerce would be; an add to cart or a checkout process. E2E testing is crucial. Because you're testing on a **real browser** and a **real device** against **external APIs**, as if you were an **genuine user**.

Finally! With E2E your team would be able to sleep properly 😴, with the safety that nothing is going to brake suddenly due to a weird bug or something that hasn't been tested properly 🎉.

Be aware that since those type of tests run on real devices, you should only test **the most important things** for what you're building, specifically user flows and paths. Building an E2E could be a little bit time consuming at first, but the effort pays off. Luckily at the moment there are a lot of tools that makes this process a lot easier!

**Recommended tools**

This is the list of tools I use for E2E I would recommend:

- [Cypress](https://www.cypress.io): Fast, easy and reliable testing for anything that runs in a **browser**.
- [Detox](https://github.com/wix/Detox): Gray box end-to-end testing and automation framework for **mobile apps**.

### Integrating tools on the development workflow

Now that we understand what is each tool for, I'm sure you asked yourself; _How I'm going to integrate those tools on my team development workflow?_

**Automate all the things** with a _[continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)_ and a _[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery)_ **pipeline**.

As we've seen previously, we can simply run some tools automatically using git hooks and that's totally fine, but this approach has a few problems:

1. Certain tools can't run on a git hook, because they could be really slow.
2. Something that runs on a local machine could be skipped.

#### Pipelines

A **pipeline** is a way to unify all your tools into a **process** that does not relies on any local machine and not depends on human interaction.

This process runs on every Pull-Request and your main branch, in order to ensure any change that wants to be deployed into production, meets the quality standards and works as expected.

Based on the tools we've seen here's a representation of how our pipeline would be:

![Front End Tools CI Pipeline](https://res.cloudinary.com/carloscuesta/image/upload/v1613848223/frontend-pipeline_qkjwbb.png)

Note that tools that run and fail faster are the first ones that run on our pipeline.

💡 **Protip**: When building a web project, I use something called **deployment previews**. This is probably one of my favorite features of the whole pipeline. You can get a **standalone deployment** with a **unique URL** for each PR.

This allows you to test your changes on a safe and isolated environment. Previews speed up code reviews and help you to validate implementations and features. There are a couple of platforms that provide this feature such as [Netlify](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) and [Vercel](https://vercel.com/docs/platform/deployments#preview). If you're not using them you can try to build something on your own!

Here's a list of platforms you can use to build your pipelines:

- [GitHub Actions](https://github.com/features/actions)
- [Travis-CI](https://travis-ci.com/)
- [Jenkins](https://www.jenkins.io/)
- [Circle-CI](https://circleci.com/)

#### Demo time

Right now I'm using **GitHub Actions** to build my pipelines 😍. If you want to see an implementation like the one we described, you can take a look at [my website pipeline](https://github.com/carloscuesta/carloscuesta.me/actions/workflows/ci.yml). Find the implementation on [the following link](https://github.com/carloscuesta/carloscuesta.me/blob/master/.github/workflows/ci.yml).

![Front End Tools CI Pipeline](https://res.cloudinary.com/carloscuesta/image/upload/v1613849250/pipeline-demo_krkshf.png)

You can see that whenever I open a Pull-Request, there's a list of checks that need to be ✅ before being able to merge the changes to master:

![PR Checks](https://res.cloudinary.com/carloscuesta/image/upload/v1613988260/pr-checks_jpckkt.png)

The checks ensure that the quality standards are passed and everything works perfect 🚀.

### Wrapping up

This article is a brain dump of the concepts and knowledge I use daily on personal and professional projects, to ship software.

I know it's a lot of information to understand but I can ensure you that if you implement a similar workflow and you put attention into _Developer Experience_ **it will make a huge difference** on your team.
