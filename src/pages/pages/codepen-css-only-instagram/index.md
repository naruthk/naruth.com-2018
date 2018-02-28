---
title: "CSS-Only Instagram Logo"
layout: page
path: "/codepen-instagram-logo"
---

### About the Project

I thought it'd be fun to replicate the famous Instragram logo with just CSS!

![Final result](finalshot.png)

[See it on CodePen](https://codepen.io/naruthk/pen/GQMEBJ/)

### Thought Process

The HTML itself is pretty generic. Again I used Pug for creating the HTML.

```html
  div#wrapper
    div#square
      div#donut
      div#circle
```

Things get very exciting for CSS though. The Instagram background is easily recognizable so I put much effort in making sure I get as close as possible to the original color variant. I didn't have a set of color schemes in mind that I think would be similar to that of Instagram so I turned to the Internet for help. I found this [post](https://stackoverflow.com/questions/37751375/instagram-new-logo-css-background) on StackOverFlow.

After a few tweaks here and there, I got the background to match what I was looking for. I felt the current background (with its gradient settings and color schemes) is as close to that of Instagram as I can achieve.

The remaining elements (the rounded corners, donut shape in the middle, and the tiny circle between the rounded corners and the donut) are very simple to create.

Overall, it was such a fun, small project to do during my spare time.

### What I Learned

A lot can be done with just CSS. I was inspired by Lynn Fisher, who is one of my favorite web designers. She actually hosts her very own [A Single Div](https://a.singlediv.com/) website where she showcases all her CSS-only designs.