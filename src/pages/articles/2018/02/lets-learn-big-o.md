---
title: Let's Learn About Big O!
date: "2018-02-13T22:07:10.169Z"
layout: post
draft: false
path: "/blog/lets-learn-about-big-o"
category: "Computer Science"
tags:
  - "Big O"
  - "CS Fundamentals"
description: "Today let's learn about Big O notation. What's the big fuzz about this term and why you should know about it?"
---

![Coding, Credit: Pexel](coding.jpeg)

Have you ever heard a computer scientist (or just about anyone who's a software engineer) talk about the speed of a computer algorithm?

Like for example, how fast can this algorithm run if a large number of items is stored in the data structure?

What's the answer?! 5 seconds? 5 clock-speed Arrhh!

Introducing the time-space complexity...

## Time and Space Complexity

In simple terms, the **time complexity** gives us the speed in which an algorithm runs, while **space complexity** tells us how much space (memory) that this algorithm is going to required.

Let's dive a little deeper into the time complexity.

---

### Time Complexity

Here are the famous ones that you will learn in any CS fundamental courses:

1. O (big O)
2. Ω (big omega)
3. θ (big theta)

**O (big O)** - Provides the *upper bound* of an algorithm's runtime. What's funny (and weird) about big O is that if your algorithm has a time complexity of `O(N)`, then the big O for this algorithm CAN also be `O(N^2)`, `O(N^3)`, and so on as long as the `O(...)` is bigger than your actual runtime.

**Ω (big omega)** - Unlike the weird dude above, big omega tells you the *lower bound*. We don't really use this a lot in the real-world, so we'll skip it.

**θ (big theta)** - This one is important as it provides the *tight bound* on runtime. Often when you're trying to optimize (improve) your algorithm to make it run faster, you'll want to look for the *tightest* runtime possible.

Wheww... hope that wasn't so bad. Now let's dig into the space side of things.

---

> **Quick Check:** What's the time complexity for the following function?

```java
// Print out each cat from a String array of cats
public static void printCats(String[] cats) {
  for (int i = 0; i < cats.length() - 1; i++) {
    System.out.println(cats[i]);
  }
}
```

: )

---

### Space Complexity

When you write an algorithm, it's very important to focus both on time and space. 

Say you've written the best algorithm ever because it's so fast. If that algorithm takes up too much memory, then it's not the best algorithm after all!

One example is that if an algorithm requires `O(1)` space, then it uses a fixed amount of space.

So the next you create your own algorithm, it is a really good idea to consider how much space your algorithm is going to take up.

---

> **Quick Check**: What do you think the runtime for inserting a new element to an existing array would be?

Think what happens if the array is full. 

In a programming language like Java, the only way for a fully-occupied array to insert a new element is to create a new array that is twice the size of the original and to copy all the data to the new array.

What's the runtime for copying existing data to a new array? That's `O(N`)!

So insertion is `O(N)`.

Not quite.

Let's read the following section to see why this isn't the case.

---

## Amortization

When we insert a new element to an existing array (despite it being full or not), it is actually not very often that we need to expand an existing array and copy all of the elements to the new array.

Therefore, we can safely say that the runtime for insertion is actually `O(1)`. 

In fact we even have a name for this kind of runtime. We call it an **amortized runtime**. Slick!

This sort of thinking and evaluating the frequency in which an algorithm does something is actually what **amortization** really is.

---

## Quick Tips

- **Drop the constant**: An `O(2N)` or `O(3N)` is the same as `O(N)`.
- **Use the dominant term**: This mean that if your runtime happens to be `O(N^2 + N)`, just say that your runtime is actually `O(N^2)`. But hey, if you runtime is `O(A^2 + B)`, then you can't really drop anything!
- **Special Case: O(log N)**: Usually when you're dealing with binary search and merge sort algorithms, their best-case runtime will be `O(log N)`. Why? Short answer: when the number of elements is split in half each time (say hello to merge sort and binary search!), the runtime will be `O(log N)`.

## Resources

I learned a lot prior to writing this blog post thanks to the forever-helpful book **Cracking The Coding Interview**. A must read!

---

If you like this blog post, let me know by sending me a Tweet mention or email me a message. Happy to reply back!