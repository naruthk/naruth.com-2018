---
path: "/font-github"
date: "2018-09-01T22:12:35"
title: "Font That GitHub Uses"
excerpt: "Out of pure curiosity, I researched what font system does GitHub uses to display its Markdown content and code snippet. To my surprise, here's what I found."
featuredImage: "../rawpixel-abstract.jpeg"
---

I’ve always been curious about the font that GitHub uses to render all our Markdown files.

This is the list of font families that is specified.

```css
font-family: 
  -apple-system, 
  BlinkMacSystemFont, 
  "Segoe UI", 
  Roboto, 
  Oxygen, 
  Ubuntu, 
  Cantarell, 
  "Fira Sans", 
  "Droid Sans", "
  Helvetica Neue", 
  Arial, sans-serif, 
  "Apple Color Emoji", 
  "Segoe UI Emoji", 
  "Segoe UI Symbol";
```

If you're using an Apple computer, then GitHub defaults its font choice to `-apple-system`. But notice that the list of font families is massive, which provides GitHub with a fail-safe system in case the user does not have one of the specified fonts.

If you want to explore the detail about this font-family and the way it is written (especially why they start with -apple-system), read this [post](https://medium.design/system-shock-6b1dc6d6596f).

That's all for now. Happy Wednesday!