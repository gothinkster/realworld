## Tags

The project uses tags to be able to grep a selection of tests to be runned.
Tags are prefixed with `@` in the project, like `@GET` or `@422`.

Each `describe()` block starts with the http verb used as a tag, like `@GET` or `@POST`.
Each `it()` block starts with the http verb, then the returned status code used as a tag, like `@200` or `@422`.

## Aliases

Use `then(function () {})` syntax over `then(() => {})` syntax.  
It's about retrieving the right **this** scope.

## Commands

Commands are used for technical purposes, like enhancing `cy.request`.
For functional tasks, like creating an article, use pure functions.
It keeps the `cy` API clean and makes it easier to discover the commands with autocomplete.
