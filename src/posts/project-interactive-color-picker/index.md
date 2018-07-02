---
title: "Interactive Color Picker Tool"
date: "2018-07-02T22:12:03.284Z"
path: "/interactive-color-picker-tool"
---

### About the Project

This was a fun project I made on CodePen.io. When you hover your cursor in any one of the grids, a random color (in RGB value) will be displayed. Then if you click on it, it automatically copies that RGB value to your clipboard so you can paste it anywhere you want.

![Color Picker](https://media.giphy.com/media/5bgPTFmIu39GyuwL2v/giphy.gif)

[Actual Demo](https://codepen.io/naruthk/full/LzMwWJ/)

### Features

- Randomly chosen color by hovering mouse
- 1500+ views on CodePen.io so far

### Thought Process

The project helped stregthened my skills in JavaScript, especially when dealing with HTML elements. Randomizing a color is very easy. The hard part for me was surprisingly in setting up the grid and assigning each numbered Div a target value so that the JavaScript can identified each Div correctly.

I messed up with JavaScript for a while in this project, especially with callbacks. Each numbered Div waits for the user to hover the mouse over it. If the user clicks it, then the random color is stored and copied to the user's clipboard and an alert is presented to confirm that the color value has been successfully copied.

While the logic for accomplishing this interaction was arguably easy, it was actually hard when I had to implement it.

**Here's the basic logic:**

- Create multiple Divs and numbered them either through CSS's `before` or with JavaScript's `innerHTML`
- Utilized the `random()` method in JavaScript to create a RGB value
- Each Div has an `onClick` function that receives an argument (the RGB value from the Div's content) and copies the value to the user's clipboard.
- Alert the user of the successfuly copying

### What I Learned

JavaScript's callback functions were sometimes difficult to understand, especially when you want them to work in a certain preferred way. This project got me more involved with the CodePen community, the people at StackOverflow, and basic understanding of JavaScript principle.