---
title: "Interview Questions"
date: "2018-09-08T18:02:26.284Z"
path: "/interview-questions"
excerpt: "Fresh out of university. I've been applying for jobs at many companies. Here are the list of interview questions I've kept for record."
featuredImage: "./paper.jpeg"
---

Interviews can be daunting but they are how companies evaluate our fit for the job we're applying for. As a recent grad from the University of Washington, I am also searching for jobs in the tech industry. My preference is in website development with React and JavaScript.

Most of the questions I've listed down below are from companies ranging from startups to big corporations. I cannot state from which company each question is from. If you're looking for such questions, I suggest you visit the Glassdoor website and read interview questions specifically for that company.

This list is personally intended for me to keep track of the questions I've been asked before. My goal is try to improve my answers to these questions. As the interviewee, sometimes the same type of questions will be thrown at you despite being interviewed at different companies. So knowing what you were asked on and improving your answers to the questions will extremely help you in the next interview.


### Behavioral

- Tell me more about yourself
- Why do you apply for this position when you are a web/mobile developer?
- Why do you think this role is a good fit for you?
- Why are you interested in working with us?
- How would you fit into this company’s culture?
- How would you add/bring diversity into the team?
- Talk to us about your online presence.
- Will you be okay with working remotely?
- What is your greatest weakness?
- What is your greatest strength?
- Do you see yourself being able to overcome the first hurdles?
- How do you think you can help us gain profit?

### Logistical

- When can you start?
- What is your employment status?

### Work Experience

- How much website/mobile development experience do you have?
- Describe a project you like most.
- Walk me through your experience as a developer.
- Tell me a time when a project you work on did not work out, and what did you do to solve that problem.
- Have you done any testing before in your previous projects? If so, how?
- Do you have experience working with other teams at your company?

### Internet / Cloud

- What is a DNS?
- What is the difference between registry, registrar, and registrant?
- What is the “cloud”?
- What are top-level domains?
- What are the two Internet Protocol versions?

### Community

- Tell me about your experience working on support forums.
- Tell us your experience working with the community.
- Tell me what is your most enjoyable moments in college?
- Have you ever done any community support work?

### Web Development Questions

- Tell me more about how you deploy your website.
- Tell me more about how a website gets into production. Start from the beginning.
- What does `0 == "0"` evaluates to?
- Suppose I have this unordered list below. How do I access the 1st and 3rd child? How do I get access to the ones with `width = "100"`?

```html
<ul>
  <li width="100" height="300">Hi</li>
  <li width="300" height="300">Hi</li>
  <li width="100" height="300">Hi</li>
  <li width="100" height="300">Hi</li>  
  <li width="300" height="300">Hi</li>
</ul>
```

- Say I have the following two objects (see code below). How do I print objectTwo’s `firstOne` variable out to the console? In the other words, how do I access `objectOne`'s `methodOne` function through `objectTwo`?

```javascript
var objectOne = {
  firstOne: 'firstOne',
  methodOne: function() {
    console.log(this.firstOne);
  }
}
    
var objectTwo = {
  firstOne: 'firstTwo'
}
```

- What is the difference between `.apply()`, `.bind()`, `.call()`?
- If I have a list object containing a list of users’ information like IDs, names, and email addresses, edit the `<App />` class to render a list of users (their names). If we toggle on a checkbox in front of that user’s name, this user will be removed. Can you try improve upon this?
- Create a React application that allows the user to type something into the text input. The application should output to console the value of the input every time the user finishes typing.