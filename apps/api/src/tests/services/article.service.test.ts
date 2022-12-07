import prismaMock from '../prisma-mock';
import {
  deleteComment,
  favoriteArticle,
  unfavoriteArticle,
} from '../../app/services/article.service';

describe('ArticleService', () => {
  describe('deleteComment', () => {
    test('should throw an error ', () => {
      // Given
      const id = 123;
      const username = 'RealWorld';

      // When
      // @ts-ignore
      prismaMock.comment.findFirst.mockResolvedValue(null);

      // Then
      expect(deleteComment(id, username)).rejects.toThrowError();
    });
  });

  describe('favoriteArticle', () => {
    test('should return the favorited article', async () => {
      // Given
      const slug = 'How-to-train-your-dragon';
      const username = 'RealWorld';

      const mockedUserResponse = {
        id: 123,
        username: 'RealWorld',
        email: 'realworld@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
      };

      const mockedArticleResponse = {
        id: 123,
        slug: 'How-to-train-your-dragon',
        title: 'How to train your dragon',
        description: '',
        body: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: 456,
        tagList: [],
        favoritedBy: [],
        author: {
          username: 'RealWorld',
          bio: null,
          image: null,
          followedBy: [],
        },
      };

      // When
      // @ts-ignore
      prismaMock.user.findUnique.mockResolvedValue(mockedUserResponse);
      // @ts-ignore
      prismaMock.article.update.mockResolvedValue(mockedArticleResponse);

      // Then
      await expect(favoriteArticle(slug, username)).resolves.toHaveProperty('favoritesCount');
    });

    test('should throw an error if no user is found', async () => {
      // Given
      const slug = 'how-to-train-your-dragon';
      const username = 'RealWorld';

      // When
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Then
      await expect(favoriteArticle(slug, username)).rejects.toThrowError();
    });
  });
  describe('unfavoriteArticle', () => {
    test('should return the unfavorited article', async () => {
      // Given
      const slug = 'How-to-train-your-dragon';
      const username = 'RealWorld';

      const mockedUserResponse = {
        id: 123,
        username: 'RealWorld',
        email: 'realworld@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
      };

      const mockedArticleResponse = {
        id: 123,
        slug: 'How-to-train-your-dragon',
        title: 'How to train your dragon',
        description: '',
        body: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: 456,
        tagList: [],
        favoritedBy: [],
        author: {
          username: 'RealWorld',
          bio: null,
          image: null,
          followedBy: [],
        },
      };

      // When
      prismaMock.user.findUnique.mockResolvedValue(mockedUserResponse);
      prismaMock.article.update.mockResolvedValue(mockedArticleResponse);

      // Then
      await expect(unfavoriteArticle(slug, username)).resolves.toHaveProperty('favoritesCount');
    });

    test('should throw an error if no user is found', async () => {
      // Given
      const slug = 'how-to-train-your-dragon';
      const username = 'RealWorld';

      // When
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Then
      await expect(unfavoriteArticle(slug, username)).rejects.toThrowError();
    });
  });
});
