---
path: "/create-and-deploy-react-to-heroku"
date: "2018-09-18T12:39:57"
title: "Creating and Deploying a React site on Heroku"
excerpt: "React is very popular for frontend development. And it's becoming dead simple and fast to publish your React project online using Heroku, a cloud platform."
featuredImage: "./heroku.png"
---

Ever since the team behind React introduces us to [create-react-app](https://github.com/facebook/create-react-app), an easy way to start building single-page application in React, it seems like everybody’s picking up React as the preferred choice for a new web project.

Today’s post will explore how you can deploy your React project on the Heroku platform.

### Before We Begin

I assume you have some knowledge of [React](https://reactjs.org/), create-react-app, [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), and a terminal emulator of choice.

Assuming you have Git installed on your machine, you’ll also need the Heroku CLI, which can be [downloaded from Heroku’s website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

If you’re on a Mac machine, you can simply run this command to install Heroku CLI:

```
brew install heroku/brew/heroku
```

Once Heroku CLI has been installed, you’ll need to configure the CLI to authenticate your credentials. To do so, run the `heroku login` command:

```bash
heroku login
Enter your Heroku credentials.
Email: john_doe@example.com
Password (typing will be hidden):
Authentication successful.
```

Now you are ready to create/deploy your Heroku app!

### Heroku vs. Amazon AWS

If you are familiar with [Amazon Web Services (AWS)](https://aws.amazon.com/), then there’s a really good chance you have already heard of Heroku before.

[Heroku](https://www.heroku.com/) is a cloud application platform that makes it extremely for you to start an application up right away. The application is hosted directly on Heroku’s servers, making the deployment work seamless and fast. As a developer, you get to focus more on writing code rather than messing around with server configurations. That’s why the post is focus on deploying to Heroku.

But if you are curious, here’s what I think is the biggest difference between Amazon AWS and Heroku.

AWS is an Infrastructure as a Service, or IAAS, wheares Heroku is a Platform as a Service (PAAS). AWS offers a wide range of products and services, such as EC2 (virtual servers), DynamoDB (NoSQL database), and S3 (cloud storage). But Heroku acts more like a platform where you can essentially push your code to Heroku’s servers and let the platform do the rest.

From my own experience, Amazon AWS products tend to be a little bit more difficult in terms of setting up and getting it right. But many companies are using Amazon AWS products to power their applications and websites, so there’s no need to argue about how popular Amazon AWS can be.

Heroku and Amazon AWS both offers a free tier to let you experiment with their products. When your product exceeds the specifications that the free tier allows for, you will have to then consider cost efficiency, which is an entirely different topic. For that, I suggest researching more on your own.

### Create & Deploy a React App

If you have not already created your React application, then you can follow the instructions below to create your application.

```bash
npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```

Let’s walk through what each step does line-by-line:

1. NPM installs the necessary files for the `create-react-app` package to work
2. You create a new application under the folder named `my-app`
3. Navigate into the `my-app` directory
4. `git-init` creates an empty Git repository
5. The `heroku create` command creates the project based on Heroku’s own `create-react-app` template

Suppose you are ready to stage all your modified files, write a commit message, and push code to Heroku server, you’ll have to follow these commands below:

```bash
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```

And viola, your project will be deployed directly to Heroku. Within your Heroku Dashboard, your project will also show up like so:

![Dashboard](/dashboard-list-of-projects.png)

That’s all it takes to deploy your site!

### Multiple Git Remote

When you run the command `git push heroku master`, you are pushing your code to Heroku and not something like GitHub.

Here’s how to push your code to GitHub:

```bash
git remote add github https://github.com/user/repo.git
```

The name `github` is just my own preference. You can easily rename this to be anything else, such as `github-staging`.

Then run the command `git remote -v` to ensure the new remote has been added:

```bash
git remote -v
github  https://github.com/naruthk/movies-finder-app.git (fetch)
github  https://github.com/naruthk/movies-finder-app.git (push)
heroku  https://git.heroku.com/movies-finder-app.git (fetch)
heroku  https://git.heroku.com/movies-finder-app.git (push)
```

So now you can simply choose where to push your code.

- `git push heroku master` will push to the master branch of your Heroku project’s repository
- `git push github master` will push your code to the master branch of your GitHub repository

That’s all it takes to have multiple remotes. Not too bad I hope!

### Automatic Deploy After Pushing to GitHub

For some of my projects, I’d rather push the code to a branch on GitHub and let Heroku automatically deploy the site whenever it detects new changes.

To do so, go to your Heroku Dashboard and select your application. Under the Deploy tab, scroll down until you find the Automatic deploys section. Check that Automatic deploys from master are enabled is selected.

![Automatic Deploy](/automatic-deploy.png)

You can also select a specific GitHub branch rather than the default `master` branch by going down to the Manual deploy section and select the branch to automatically deploy.
