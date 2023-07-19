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
  // TODO
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
    });
  });
});
