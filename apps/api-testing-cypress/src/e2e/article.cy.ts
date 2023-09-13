// cypress test to create an article
import {
  createArticle,
  deleteArticle,
  favoriteArticle,
  unfavoriteArticle,
  updateArticle,
} from '../support/article.util';
import { registerUser } from '../support/user.util';

describe('@GET articles', () => {
  // TODO
});

describe('@GET feed', () => {
  it('OK @200', () => {
    // When
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      cy.getRequest(`/api/articles/feed`, this.token).then((response: Cypress.Response<any>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.articles.length).to.equal(0);
        expect(response.body.articlesCount).to.equal(0);
      });
    });
  });

  it('KO @401', () => {
    // When
    cy.then(function () {
      cy.getRequest(`/api/articles/feed`, undefined).then((response: Cypress.Response<any>) => {
        // Then
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('missing authorization credentials');
      });
    });
  });
});

describe('@GET article', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token').debug();
    });

    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    cy.then(function () {
      cy.getRequest(`/api/articles/${this.slug}`).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.article.title).to.equal(article.title);
        expect(response.body.article.description).to.equal(article.description);
        expect(response.body.article.body).to.equal(article.body);
        expect(response.body.article.tagList).to.deep.equal(article.tagList);
      });
    });
  });
  it('KO @404', () => {
    // When
    const unknownSlug = new Date().getTime() * 3;
    cy.getRequest(`/api/articles/${unknownSlug}`).then((response: Cypress.Response<never>) => {
      // Then
      expect(response.status).to.equal(404);
    });
  });
});

describe('@POST article', () => {
  it('OK @201', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(201);
        expect(response.body.article.title).to.equal(article.title);
        expect(response.body.article.description).to.equal(article.description);
        expect(response.body.article.body).to.equal(article.body);
        expect(response.body.article.tagList).to.deep.equal(article.tagList);
      });
    });
  });

  it('OK @401', () => {
    // Given
    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article).then((response: Cypress.Response<{ message: string }>) => {
        // Then
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('missing authorization credentials');
      });
    });
  });

  it('KO @422 title', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    const article = {
      title: '',
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token).then(
        (response: Cypress.Response<{ errors: { title: string[] } }>) => {
          // Then
          expect(response.status).to.equal(422);
          expect(response.body.errors.title[0]).to.equal("can't be blank");
        },
      );
    });
  });
  it('KO @422 title unique', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token);
    });

    cy.then(function () {
      createArticle(article, this.token).then(
        (response: Cypress.Response<{ errors: { title: string[] } }>) => {
          // Then
          expect(response.status).to.equal(422);
          expect(response.body.errors.title[0]).to.equal('must be unique');
        },
      );
    });
  });
  it('KO @422 description', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: '',
      body: `${Cypress.env('prefix')}${Date.now()}`,
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token).then(
        (response: Cypress.Response<{ errors: { description: string[] } }>) => {
          // Then
          expect(response.status).to.equal(422);
          expect(response.body.errors.description[0]).to.equal("can't be blank");
        },
      );
    });
  });
  it('KO @422 body', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    const article = {
      title: `${Cypress.env('prefix')}${Date.now()}`,
      description: `${Cypress.env('prefix')}${Date.now()}`,
      body: '',
      tagList: [`${Cypress.env('prefix')}${Date.now()}`],
    };

    // When
    cy.then(function () {
      createArticle(article, this.token).then(
        (response: Cypress.Response<{ errors: { body: string[] } }>) => {
          // Then
          expect(response.status).to.equal(422);
          expect(response.body.errors.body[0]).to.equal("can't be blank");
        },
      );
    });
  });
});

describe('@PUT article', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      updateArticle(
        {
          description: `foo`,
        },
        this.slug,
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.article.description).to.equal('foo');
      });

      cy.getRequest(`/api/articles/${this.slug}`).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.article.description).to.equal('foo');
      });
    });
  });

  it('KO @401', () => {
    // When
    const unknownSlug = `${new Date().getTime() * 3}`;
    updateArticle(
      {
        description: `foo`,
      },
      unknownSlug,
      undefined,
    ).then((response: Cypress.Response<{ message: string }>) => {
      // Then
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal('missing authorization credentials');
    });
  });

  it('KO @404', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    // When
    const slug = `${new Date().getTime() * 3}`;
    cy.then(function () {
      updateArticle({ description: `foo` }, slug, this.token).then(
        (response: Cypress.Response<never>) => {
          // Then
          expect(response.status).to.equal(404);
        },
      );
    });
  });
});

describe('@DELETE article', () => {
  it('OK @204', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      deleteArticle(this.slug, this.token).then((response: Cypress.Response<never>) => {
        // Then
        expect(response.status).to.equal(204);
      });

      cy.getRequest(`/api/articles/${this.slug}`).then((response: Cypress.Response<never>) => {
        // Then
        expect(response.status).to.equal(404);
      });
    });
  });

  it('KO @401', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      deleteArticle(this.slug).then((response: Cypress.Response<{ message: string }>) => {
        // Then
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('missing authorization credentials');
      });
    });
  });

  it('KO @403', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    registerUser({
      username: `${Cypress.env('prefix')}${Date.now()}-2`,
      email: `${Cypress.env('prefix')}${Date.now()}-2`,
      password: `${Cypress.env('prefix')}${Date.now()}-2`,
    }).then((response: Cypress.Response<{ user: { token: string } }>) => {
      cy.wrap(response.body.user.token).as('unauthorizedToken');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      deleteArticle(this.slug, this.unauthorizedToken).then(
        (response: Cypress.Response<{ message: string }>) => {
          // Then
          expect(response.status).to.equal(403);
          expect(response.body.message).to.equal('You are not authorized to delete this article');
        },
      );
    });
  });

  it('KO @404', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });
    const slug = `${new Date().getTime() * 3}`;

    // When
    cy.then(function () {
      deleteArticle(slug, this.token).then((response: Cypress.Response<never>) => {
        // Then
        expect(response.status).to.equal(404);
      });
    });
  });
});

describe('@POST favorite article', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    registerUser({
      username: `${Cypress.env('prefix')}${Date.now()}-2`,
      email: `${Cypress.env('prefix')}${Date.now()}-2`,
      password: `${Cypress.env('prefix')}${Date.now()}-2`,
    }).then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('followerToken');
    });

    // When
    cy.then(function () {
      favoriteArticle(this.slug, this.followerToken).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.article.favorited).to.equal(true);
        expect(response.body.article.favoritesCount).to.equal(1);
      });

      cy.getRequest(`/api/articles/${this.slug}`, this.followerToken).then(
        (response: Cypress.Response<Article>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.article.favorited).to.equal(true);
          expect(response.body.article.favoritesCount).to.equal(1);
        },
      );
    });
  });

  it('KO @401', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      favoriteArticle(this.slug, undefined).then((response: Cypress.Response<any>) => {
        // Then
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('missing authorization credentials');
      });
    });
  });
});

describe('@DELETE unfavorite article', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    registerUser({
      username: `${Cypress.env('prefix')}${Date.now()}-2`,
      email: `${Cypress.env('prefix')}${Date.now()}-2`,
      password: `${Cypress.env('prefix')}${Date.now()}-2`,
    }).then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('followerToken');
    });

    // When
    cy.then(function () {
      favoriteArticle(this.slug, this.followerToken).then((response: Cypress.Response<Article>) => {
        // Then
        expect(response.status).to.equal(200);
        expect(response.body.article.favorited).to.equal(true);
        expect(response.body.article.favoritesCount).to.equal(1);
      });
    });

    // When
    cy.then(function () {
      unfavoriteArticle(this.slug, this.followerToken).then(
        (response: Cypress.Response<Article>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.article.favorited).to.equal(false);
          expect(response.body.article.favoritesCount).to.equal(0);
        },
      );

      cy.getRequest(`/api/articles/${this.slug}`, this.followerToken).then(
        (response: Cypress.Response<Article>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.article.favorited).to.equal(false);
          expect(response.body.article.favoritesCount).to.equal(0);
        },
      );
    });
  });

  it('KO @401', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      unfavoriteArticle(this.slug, undefined).then((response: Cypress.Response<any>) => {
        // Then
        expect(response.status).to.equal(401);
        expect(response.body.message).to.equal('missing authorization credentials');
      });
    });
  });
});

describe('@GET comments', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      cy.getRequest(`/api/articles/${this.slug}/comments`, this.token).then(
        (response: Cypress.Response<{ comments: Comment[] }>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.comments.length).to.equal(0);
        },
      );
    });
  });

  it('OK @200 unauthenticated', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user.token).as('token');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    // When
    cy.then(function () {
      cy.getRequest(`/api/articles/${this.slug}/comments`, undefined).then(
        (response: Cypress.Response<{ comments: Comment[] }>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.comments.length).to.equal(0);
        },
      );
    });
  });
});

describe('@POST comments', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.user.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    const comment = { body: 'Hello' };

    // When
    cy.then(function () {
      cy.postRequest(`/api/articles/${this.slug}/comments`, { comment }, this.user.token).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.comment.body).to.equal(comment.body);
          expect(response.body.comment).to.haveOwnProperty('id');
          expect(response.body.comment).to.haveOwnProperty('createdAt');
          expect(response.body.comment).to.haveOwnProperty('updatedAt');
          expect(response.body.comment.author.username).to.equal(this.user.username);
        },
      );
    });

    cy.then(function () {
      cy.getRequest(`/api/articles/${this.slug}/comments`, this.user.token).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.comments.length).to.equal(1);
          expect(response.body.comments[0].body).to.equal(comment.body);
          expect(response.body.comments[0]).to.haveOwnProperty('id');
          expect(response.body.comments[0]).to.haveOwnProperty('createdAt');
          expect(response.body.comments[0]).to.haveOwnProperty('updatedAt');
          expect(response.body.comments[0].author.username).to.equal(this.user.username);
        },
      );
    });
  });

  it('KO @401', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.user.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    const comment = { body: 'Hello' };

    // When
    cy.then(function () {
      cy.postRequest(`/api/articles/${this.slug}/comments`, { comment }, undefined).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(401);
          expect(response.body.message).to.equal('missing authorization credentials');
        },
      );
    });
  });

  it('KO @422', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.user.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    const comment = { body: undefined };

    // When
    cy.then(function () {
      cy.postRequest(`/api/articles/${this.slug}/comments`, { comment }, this.user.token).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(422);
          expect(response.body.errors.body[0]).to.equal("can't be blank");
        },
      );
    });
  });
});

describe('@DELETE comments', () => {
  it('OK @200', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.user.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    const comment = { body: `${Cypress.env('prefix')}${Date.now()}-1` };

    cy.then(function () {
      cy.postRequest(`/api/articles/${this.slug}/comments`, { comment }, this.user.token).then(
        (response: Cypress.Response<any>) => {
          expect(response.status).to.equal(200);
          cy.wrap(response.body.comment.id).as('commentId');
        },
      );
    });

    const otherComment = { body: `${Cypress.env('prefix')}${Date.now()}-2` };

    cy.then(function () {
      cy.postRequest(
        `/api/articles/${this.slug}/comments`,
        { comment: otherComment },
        this.user.token,
      ).then((response: Cypress.Response<any>) => {
        expect(response.status).to.equal(200);
      });
    });

    // When
    cy.then(function () {
      cy.deleteRequest(
        `/api/articles/${this.slug}/comments/${this.commentId}`,
        this.user.token,
      ).then((response: Cypress.Response<any>) => {
        // Then
        expect(response.status).to.equal(200);
      });
    });

    cy.then(function () {
      cy.getRequest(`/api/articles/${this.slug}/comments`, this.user.token).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(200);
          expect(response.body.comments.length).to.equal(1);
          expect(response.body.comments[0].body).to.equal(otherComment.body);
        },
      );
    });
  });

  it('KO @401', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    cy.then(function () {
      createArticle(
        {
          title: `${Cypress.env('prefix')}${Date.now()}`,
          description: `${Cypress.env('prefix')}${Date.now()}`,
          body: `${Cypress.env('prefix')}${Date.now()}`,
          tagList: [`${Cypress.env('prefix')}${Date.now()}`],
        },
        this.user.token,
      ).then((response: Cypress.Response<Article>) => {
        cy.wrap(response.body.article.slug).as('slug');
      });
    });

    const comment = { body: 'Hello' };

    cy.then(function () {
      cy.postRequest(`/api/articles/${this.slug}/comments`, { comment }, this.user.token).then(
        (response: Cypress.Response<any>) => {
          expect(response.status).to.equal(200);
          cy.wrap(response.body.comment).as('comment');
        },
      );
    });

    // When
    cy.then(function () {
      cy.deleteRequest(`/api/articles/${this.slug}/comments/${this.comment.id}`, undefined).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(401);
          expect(response.body.message).to.equal('missing authorization credentials');
        },
      );
    });
  });

  it('KO @404', () => {
    // Given
    registerUser().then((response: Cypress.Response<User>) => {
      cy.wrap(response.body.user).as('user');
    });

    const nonExistingSlug = `${Cypress.env('prefix')}${Date.now()}-2`;

    // When
    cy.then(function () {
      cy.deleteRequest(`/api/articles/${nonExistingSlug}/comments/1`, this.user.token).then(
        (response: Cypress.Response<any>) => {
          // Then
          expect(response.status).to.equal(404);
        },
      );
    });
  });
});
