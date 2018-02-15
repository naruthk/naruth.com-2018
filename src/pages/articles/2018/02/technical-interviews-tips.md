---
title: Technical Interviews Tips
date: "2018-02-14T21:44:42.169Z"
layout: post
draft: false
path: "/blog/technical-interviews-tips"
category: "Interviews"
tags:
  - "Technical interviews"
description: "These are tips I learned from reading the Cracking The Coding Interview book. They are both for my own note-keeping and for your own benefit too!"
---

![Coding, Credit: Pexel](coding.jpeg)

Technical interviews are extremely difficult to get past.

If your next technical interview is coming very soon (or maybe you have months until that day), then it is very important to get an overview view of the strategies you should take to beat the interview.

After reading the Cracking The Coding Interview book last year, I wrote down some tips that the author had provided. These tips are extremely helpful to me and has literally saved my ass many times.

## Listening Well (And Asking Questions)

- Pay attention to the interviewer, to the type of question being asked, and to the return value that the interviewer is looking for.
- Record as much information as possible (mentally or write down on paper/white board the ones that you think are useful).
- Don't be afraid to ask the interviewer for clarification.

## Draw Ideas Out

- Use the paper/white board to your advantage. But don't waste the entire space with just scratch work or notes. Remember that you'll need room to actually write the solution down!
- Make the drawings specific. This makes it easier to tackle test cases.

> Personal tips: I love making step diagrams whenever I could in order to see how a function or an algorithm I have in mind would work.

![Whiteboard, credit: Pexel](whiteboard.jpg)

## Begin by Doing a Brute Force Method

- Start by coding the most obvious and easiest algorithm.
- It can (and will) lead you to a more optimized answer later on.

> Personal tips: Sometimes I end up only with writing just a simple brute force algorithm and talking to the interviewer about the ways in which I can optimize it (without even having to write down the optimized version).

## Optimize, Optimize, Optimize!

- Ask yourself: "Can this algorithm be improved in any way?", "I hate that my current algorithm has a runtime of O(N^2). I wish it is O(N) instead... how should I approach this?"
- Rescuer #1: Care less about the space it takes (memory) and more about the time it takes to run it (speed).
- Rescuer #2: Use hash-table!

> Personal tips: My strategy is to go through all available data structures and check to see how each data structure can help improved my current solution.

![Lightbuld, Pexels](lightbulb.jpeg)

## Good Variable Naming

- Don't use things like `i` and `j`. They don't really mean anything, do they?
- Why not try something along the lines of `startingLetter` or `currentLetter`? They are more meaningful and easier to understand.

## Walk Through Your Code

- Make sure there's no errors, especially edge and extreme cases.
- See what happens if you pass in a `null` or `undefined` values.
- Hopefully your program does not crash (yikes!)

---

That sums up the strategies I'd recommend for you to get past technical interviews. Surely there's more to these out there on the Internet.

Good luck.

:)