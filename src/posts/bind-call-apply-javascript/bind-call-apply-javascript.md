---
path: "/bind-call-apply-javascript"
date: "2018-09-18T14:37:05"
title: "JavaScript: bind(), call(), apply()"
excerpt: "JavaScript is huge in the web development world. So it is important to understand some of the language’s trickiest things like these built-in methods: bind(), call(), and apply()."
featuredImage: "../generic.jpeg"
imageCredit: 'Pexels'
---

Perhaps the most important thing to note is that all of these built-in methods are designed to let you set what “**this**” refers to. In other words, you can change the context for a given function.

If you are still curious or confused, continue reading.

## TL;DR

- `bind()` returns a new function (but does not invoke it) and also set the context of “this” to the object being passed in
- `.call()` invokes the function and allows you to pass in **argument(s) as comma-separated values**
- `.apply()` invokes the function and allows you to pass in **argument(s) as an array**

## Let’s start with .bind()

The main idea of `.bind()` is the ability to set the context (“this”) on a given function that we can call at a later point in time.

Here’s an example to demonstrate how `.bind()` is used.

Let’s say we have created two objects:

```javascript
const personA = { firstName: 'Naruth', lastName: 'Kongurai' }
const personB = { firstName: 'John', lastName: 'Doe' }
```

We also created a function called **greetPerson** that logs to the console the person’s first and last name:

```javascript
function greetPerson() {
  console.log(this.firstName + " " + this.lastName)
}
```

If we naively call `greetPerson(personA)`, then we end up getting `undefined undefined`. But the question is why?

This has to do with how “this” in JavaScript works. `this.firstName`  and `this.lastName` within the function `greetPerson()` actually are referring to the global window object. Within the global window object, there is no `firstName` and `lastName` properties, and so `undefined` gets printed out.

In fact, even if we call  `greetPerson` and pass in the object `personA` as a parameter, “this” will not be associated with the object that is passed in at all.

```javascript
const personA = { firstName: 'Naruth', lastName: 'Kongurai' }
const personB = { firstName: 'John', lastName: 'Doe' }

function greetPerson() {
  console.log(this.firstName + " " + this.lastName)
}

greetPerson() // OUTPUT: "undefined undefine"
greetPerson(personA) // OUTPUT: "undefined undefined"
```

So what’s the solution? Use `.bind()`.

```javascript
greetPerson.bind(personA) // Naruth Kongurai
```

When we bind the object to the `greetPerson` function, .`bind()` will **return a new function** that has its context (“this”) assigned to whatever object is passed in.

In [React](https://reactjs.org), for instance, we often have to bind our functions in the constructor like so:

```javascript
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
handleChange = () => {
  ....
}
```

Using the example above, let’s say the user clicks on a button that contains an `onClick` event. The `onClick` event then fires up the `handleChange` function, which will set the meaning of “this” to the context at the time the function is actually called.

## How about .call() and .apply()?

These two built-in methods, `.call()` and `.apply()`, essentially work the same way. Their responsibility is to invoke the function and let you pass in argument(s). 

The easiest way to distinguish them is to think that

- `.call()` invokes the function and allows you to pass in **argument(s) as comma-separated values**
- `.apply()` invokes the function and allows you to pass in **argument(s) as an array**

### .call()

Here’s one example of `.call()` in action:

```javascript
var personA = { name: "Sam" }

function greetPerson(greeting, question) {
  console.log(first + " " + this.name + " " + second)
}

greetPerson.call(personA, "Hello", ", how are you doing today?");
// "Hi Sam, how are you doing today?"
```

Here’s the basic template for `.call()`:

```javascript
nameOfFunction.call(value of this, arg1, arg2…)
```

So how does .`call()` work? What happens is that `.call()` is setting the context of “this” within the `greetPerson` function to be the object that is passed in. After doing so, `this.name` will no longer be undefined because it contains the value of `Sam`. 

### .apply()

As mentioned earlier, the only thing different from `.call()` is that `.apply()` takes in an array.

Here’s the same example with `.apply()` being used:

```javascript
var personA = { name: "Sam" }

function greetPerson(greeting, question) {
  console.log(first + " " + this.name + " " + second)
}

greetPerson.apply(personA, ["Hello", ", how are you doing today?"]);
// "Hi Sam, how are you doing today?"
```

## Summary

Here’s a quick recap for each built-in methods:

- `bind()` **returns** a new function (but does not invoke it) and also set the context of “this” to the object being passed in
- `.call()` **invokes** the function and allows you to pass in **argument(s) as comma-separated values**
- `.apply()` **invokes** the function and allows you to pass in **argument(s) as an array**

Thank you for reading!