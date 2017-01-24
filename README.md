# ![RealWorld Example Applications](media/realworld.png)

> ### Fullstack example codebases for React, Angular 2, AngularJS, Node, Rails, Django, and more

It's kinda like TodoMVC, but for real world fullstack apps.

Most examples and tutorials only cover simple examples like "todo" apps and rarely show you how to build real world, production ready fullstack apps. They don't cover actually deploying your applications into a production environment either.

To solve this problem, we worked with (and funded) OSS community leaders to create a series of frontend, backend and deployment codebases & tutorials that can be mixed & matched (the backends all create the same API & the frontends use the same UI templates/styles). Every tutorial teaches you how to build Conduit [(demo)](https://angularjs.realworld.io), a beautifully designed and fully featured social blogging platform, from scratch. The tutorials also teach you best practices & expert protips for each stack as well as how to deploy it to production environments on AWS, Heroku, and more.

**NOTE: Everything here is still a WIP -- PR's and issues welcome!**

# Supported Stacks

Interested in creating a RealWorld example app in a framework we don't support? Get in touch.

### Frontends

| Angular 2+         |     React / Redux      |          Angular 1.5+ |
| :---:         |     :---:      |          :---: |
| [![Angular 2](https://raw.githubusercontent.com/gothinkster/angular2-realworld-example-app/master/logo.png) ![Star](https://img.shields.io/github/stars/gothinkster/angular2-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/angular2-realworld-example-app.svg?style=social&label=Fork)](https://github.com/GoThinkster/angular2-realworld-example-app) | [![React / Redux](https://raw.githubusercontent.com/gothinkster/react-redux-realworld-example-app/master/project-logo.png) ![Star](https://img.shields.io/github/stars/gothinkster/react-redux-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/react-redux-realworld-example-app.svg?style=social&label=Fork)](https://github.com/GoThinkster/react-redux-realworld-example-app) | [![Angular 1.5+](https://raw.githubusercontent.com/gothinkster/angularjs-realworld-example-app/master/project-logo.png) ![Star](https://img.shields.io/github/stars/gothinkster/angularjs-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/angularjs-realworld-example-app.svg?style=social&label=Fork)](https://github.com/gothinkster/angularjs-realworld-example-app) |
| **Angular 2** codebase that strictly adheres to the official style guide; publicly reviewed by Angular community. | **React/Redux** codebase that was built by a Redux community member under guidance of Dan Abramov. | **Angular 1.5+** codebase utilizing ES6 classes and Component API |


### Backends

| Node / Express         |     Django      |          Rails |
| :---:         |     :---:      |          :---: |
| [![Node/Express](https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/master/project-logo.png)![Star](https://img.shields.io/github/stars/gothinkster/node-express-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/node-express-realworld-example-app.svg?style=social&label=Fork)](https://github.com/gothinkster/node-express-realworld-example-app) | [![Django](https://raw.githubusercontent.com/gothinkster/django-realworld-example-app/master/project-logo.png) ![Star](https://img.shields.io/github/stars/gothinkster/django-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/django-realworld-example-app.svg?style=social&label=Fork)](https://github.com/gothinkster/django-realworld-example-app) | [![Rails](https://raw.githubusercontent.com/gothinkster/rails-realworld-example-app/master/project-logo.png) ![Star](https://img.shields.io/github/stars/gothinkster/rails-realworld-example-app.svg?style=social&label=Star) ![Fork](https://img.shields.io/github/forks/gothinkster/rails-realworld-example-app.svg?style=social&label=Fork)](https://github.com/gothinkster/rails-realworld-example-app) |
| **Node / Express** codebase. | **Django** codebase. | **Rails** codebase. |



# How this works

- Every tutorial is built against the same [API spec](API.md) to ensure modularity of every frontend & backend 
- Every frontend utilizes the same hand crafted Bootstrap 4 theme for identical UI/UX
- There is a hosted version of the backend API available for public usage, no API keys required


# Who made this?

The core creators are **[Eric Simons](https://twitter.com/ericsimons40)** and **[Albert Pai](https://twitter.com/iamalbertpai)** &mdash; we personally run [Thinkster.io](https://thinkster.io), the developer tutorial site where all of these stacks are taught. Thinkster funds this entire project, so please consider investing in [a Pro subscription](https://thinkster.io/pro) to **support the ongoing development of RealWorld**!

RealWorld wouldn't be possible without the help of the open source community reviewing codebases, creating new app implementations, and many other tasks that help push this project forward. We especially appreciate the OSS leaders who have helped contribute to RealWorld:

- **Val Karpov** (core contributor of Mongoose) created the React/Redux codebase and authored its accompanying tutorial
- **James Brewer** (docs contributor to Django) for countless brainstorming sessions, helping name this project, and creating the Django codebase + tutorial
- **Dan Abramov** (creator of Redux) for [sparking the initial idea](https://twitter.com/dan_abramov/status/692009757775896577), [getting the Redux community involved](https://github.com/reactjs/redux/issues/1353), as well as graciously taking the time to provide feedback on the Redux codebase
- **Max Lynch** (creator of Ionic) for taking the time to provide guidance in the early days of this project



# License
All of the codebases in the stacks folder are **MIT licensed** unless otherwise specified.

Docs in this repo are [Creative Commons](https://creativecommons.org/licenses/by-nc-sa/4.0/) licensed.
