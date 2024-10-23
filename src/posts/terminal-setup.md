---
dateModified: '2016-02-06 15:55'
datePublished: '2016-02-06 15:55'
disqusIdentifier: '7'
excerpt: 'Carlos Cuesta terminal setup with ZSH and Oh-My-ZSH, using materialshell and my dotfiles.'
image: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593531858/blog-featured-images/Terminal_Setup.png'
title: 'Terminal setup'
---

**Terminal** is a place where a developer spends a lot of time, running commands, looking for outputs and doing a bunch of stuff, so better to stay comfortable and productive with it.

### Shell

I use [**ZSH**](http://www.zsh.org) as my main shell along with [**Oh-My-Zsh**](http://ohmyz.sh). By default, OS X comes with bash, a simpler shell. To setup ZSH and install Oh-My-Zsh run:

```shell
$ chsh -s /bin/zsh
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

To see what shell are you using run:

```shell
$ echo $SHELL
```

### UI

After setting up ZSH and Oh-My-Zsh, now we are ready to customize and put our shell on steroids.

I use a theme called [**materialshell**](https://github.com/carloscuesta/materialshell) that I've made for my own.

[**Follow this guide to install and setup my terminal**.](https://github.com/carloscuesta/materialshell/blob/master/README.md)

![Carlos Cuesta Shell - MaterialShell](https://res.cloudinary.com/carloscuesta/image/upload/v1454753967/gazne7uhxuq8ugpfvile.png)

### Dotfiles

I have my own [**dotfiles repository**](https://github.com/carloscuesta/dotfiles) with all my shell configuration files, where you can take a look to learn and be more productive with your shell.
