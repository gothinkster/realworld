# Ready to implement Conduit in a new framework?

1. **Check and see if there any [github issues](https://github.com/gothinkster/realworld/issues) for the framework** you want to implement.

2. If someone else has started working on an implementation, **consider jumping in and helping them!**

3. Otherwise, feel free to **[fork our starter kit](https://github.com/gothinkster/realworld-starter-kit) and get started**

4. **Create a new issue** for your framework tagged `wip` & link to your repo


### [Fork our starter kit >>>](https://github.com/gothinkster/realworld-starter-kit)


# Creating New Framework Implementations

## Project Overview

"Conduit" is a social blogging site (i.e. a Medium.com clone). It uses a custom API for all requests, including authentication. You can view a live demo over at https://react-redux.realworld.io

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



# Mobile Specs

### [Icons for (iOS/Android)](https://github.com/gothinkster/realworld/tree/master/spec/mobile_icons)

### Using the hosted API

Simply point your [API requests](../api/) to `https://conduit.productionready.io/api` and you're good to go!

### Styles/Templates

Unfortunately, there isn't a common way for us to reuse & share styles/templates for cross-platform mobile apps.

Instead, we recommend using the Medium.com [iOS](https://itunes.apple.com/us/app/medium/id828256236?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.medium.reader&hl=en) apps as a "north star" regarding general UI functionality/layout, but try not to go too overboard otherwise it will unnecessarily complicate your codebase (in other words, [KISS](https://en.wikipedia.org/wiki/KISS_principle) :)
