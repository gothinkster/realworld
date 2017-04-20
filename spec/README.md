# Creating New Framework Implementations

Before getting started on a new implementation, please **check and see if there any [github issues](https://github.com/gothinkster/realworld/issues) for the framework** you want to implement.

If someone else has started working on an implementation, consider jumping in and helping them!

Otherwise, feel free to **[fork our starter kit](https://github.com/gothinkster/realworld-starter-kit) & post the link to it in a new issue with your framework's name tagged `stack wip`.**


### [Fork our starter kit >>>](https://github.com/gothinkster/realworld-starter-kit)


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


## Frontend Overview 

We created a custom Bootstrap 4 style & templates to ensure all frontends had consistent UI functionality. Our [starter kit](https://github.com/gothinkster/realworld-starter-kit) includes all the [templates & info required to get up and running](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md). 

### Routes

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


## Backend Specifications

All backend implementations need to adhere to our [API spec](https://github.com/gothinkster/realworld/tree/master/api).

For your convenience, we have a [Postman collection](https://github.com/gothinkster/realworld/blob/master/api/Conduit.json.postman_collection) that you can use to test your API endpoints as you build your app.

Our [starter kit](https://github.com/gothinkster/realworld-starter-kit) includes [references to the API specs & testing](https://github.com/gothinkster/realworld-starter-kit/blob/master/BACKEND_INSTRUCTIONS.md) required for creating a new backend.

