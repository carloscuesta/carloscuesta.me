---
dateModified: "2017-07-17 13:00"
datePublished: "2017-07-17 13:00"
disqusIdentifier: "20"
excerpt: "Git development workflow. Feature branches, rebase on top of master, squash and merge."
image: "https://res.cloudinary.com/carloscuesta/image/upload/v1500212976/excdshjxyrip9ofijrfh.png"
title: "Git development workflow"
---

**Git**, it's the most popular version control system and widely the most used for tech companies. In fact, as a software developer you'll be continuously using a tool like that.

I'll try to explain the best workflow I've found so far working on a codebase with a lot of people. There's no silver bullet for Git, but from my own experience [feature branches](https://git-scm.com/docs/git-branch), [rebase](https://git-scm.com/docs/git-rebase) and [squash](https://git-scm.com/docs/git-merge#git-merge---squash) makes my workflow easier 👨‍💻.

### Feature branches

Create a new branch every time you start doing a new feature, bug fix, whatever.

```bash
git checkout -b feature-branch
```

### Rebase

**Always rebase** a feature branch **on top of master** before merging it. Even though there are no conflicts, it's always good to test your features or changes with the latest `master` available.

You'll avoid a lot of problems by just doing:

```bash
git rebase -i origin/master
```

After that you'll need to push `--force` the branch, because the history has been modified and now your changes are on 🔝 of `master` ✨.

### Squash and Merge

To maintain a healthy master `log` 📖 use `--squash` when merging a branch. All your commits will be grouped in a single one. Remember to keep your master history clean and easy to understand ☀️.

```bash
git merge --squash feature-branch
git commit -m 'Squash commit message'
```
