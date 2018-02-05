---
title: What Font Does GitHub Use?
date: "2018-02-04T22:10:10.169Z"
layout: post
draft: false
path: "/blog/github-font"
category: "Fonts"
tags:
  - "GitHub"
  - "Notes"
  - "CSS"
description: ""
---

I've always been curious about the font that GitHub uses to render all our Markdown files.

Out of curiosity, I went looking for it and luckily I found it. Everybody, save the following as a snippet somewhere:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

If you want to explore the detail about this `font-family` and the way it is written (especially why they start with `-apple-system`), read this blog [post](https://medium.design/system-shock-6b1dc6d6596f).