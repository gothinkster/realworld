# Ready to implement Conduit in a new framework?

1. **Check and see if there any [github issues](https://github.com/gothinkster/realworld/issues) for the framework** you want to implement.

2. If someone else has started working on an implementation, **consider jumping in and helping them!**

3. Otherwise, feel free to **[fork our starter kit](https://github.com/gothinkster/realworld-starter-kit) and get started**

4. **Create a new issue** for your framework & link to your repo


### [Fork our starter kit >>>](https://github.com/gothinkster/realworld-starter-kit)


# Creating New Framework Implementations

## Remember: Keep your codebases _simple_, yet _robust_.

If a newbie dev to your framework comes along and can't grok the high level architecture within 10 minutes, it probably means that you went a little overboard in the engineering department.

Alternatively, you should _never_ forgo following fundamental best practices for the sake of simplicity, lest we teach that same newbie dev the _wrong_ way of doing things.

The quality & architecture of Conduit implementations should reflect something similar to an early stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.

## To write tests, or to not write tests?

**TL;DR** — we only require _at least_ one unit test with every repo, but we'd definitely prefer all of them to include excellent testing coverage if the maintainers are willing to add it (or if someone in the community is kind enough to make a pull request :)

We think tests are a good idea, and we're huge fans of TDD in general. However, building Conduit implementations without full testing coverage is a meaningful time investment as is, so we originally didn’t include full testing coverage in the spec because we figured that if people wanted it, then it would be a great “extra credit” objective for the repo. For example, our Angular 2 repo had a request for unit tests and some awesome community members are now working on a PR for it.

Another reason we didn’t include them in the spec is from the "Golden Rule" above:

> The quality & architecture of Conduit implementations should reflect something similar to an early stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.

Most startups we know that work in consumer facing apps (like Conduit) don’t apply TDD/testing until they have solid product-market fit, which is smart because they then spend most of their time iterating on product & UI and thus are far more likely to find PMF.

This doesn’t mean that TDD/testing === over-engineering, but in certain circumstances that statement does evaluate true (ex: consumer product finding PMF, sideprojects, robust prototypes, etc).

That said, we do _prefer_ that every repo includes excellent tests that are exemplary of TDD/testing with that framework 👍



## Project Overview

"Conduit" is a social blogging site (i.e. a Medium.com clone). It uses a custom API for all requests, including authentication. You can view a live demo over at https://demo.realworld.io

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users


# Frontend Specs

### Using the hosted API

Simply point your [API requests](../api/) to `https://conduit.productionready.io/api` and you're good to go!

### Unit test(s)

Include _at least_ **one** unit test in your repo to demonstrate how testing works (full testing coverage is _not_ required!)

### Styles/Templates

We created a custom Bootstrap 4 style & templates to ensure all frontends had consistent UI functionality. Our [starter kit](https://github.com/gothinkster/realworld-starter-kit) includes all the [templates & info required to get up and running](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md). 

### Routing Guidelines

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles


# Backend Specs

All backend implementations need to adhere to our [API spec](https://github.com/gothinkster/realworld/tree/master/api).

For your convenience, we have a [Postman collection](https://github.com/gothinkster/realworld/blob/master/api/Conduit.json.postman_collection) that you can use to test your API endpoints as you build your app.

Our [starter kit](https://github.com/gothinkster/realworld-starter-kit) includes [references to the API specs & testing](https://github.com/gothinkster/realworld-starter-kit/blob/master/BACKEND_INSTRUCTIONS.md) required for creating a new backend.

### Unit test(s)

Include _at least_ **one** unit test in your repo to demonstrate how testing works (full testing coverage is _not_ required!)




# Mobile Specs

### [Icons for (iOS/Android)](https://github.com/gothinkster/realworld/tree/master/spec/mobile_icons)

### Using the hosted API

Simply point your [API requests](../api/) to `https://conduit.productionready.io/api` and you're good to go!

### Styles/Templates

Unfortunately, there isn't a common way for us to reuse & share styles/templates for cross-platform mobile apps.

Instead, we recommend using the Medium.com [iOS](https://itunes.apple.com/us/app/medium/id828256236?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.medium.reader&hl=en) apps as a "north star" regarding general UI functionality/layout, but try not to go too overboard otherwise it will unnecessarily complicate your codebase (in other words, [KISS](https://en.wikipedia.org/wiki/KISS_principle) :)
