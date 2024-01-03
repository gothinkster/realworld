import prismaMock from '../prisma-mock';
import { followUser, getProfile, unfollowUser } from '../../app/services/profile.service';

describe('ProfileService', () => {
  describe('getProfile', () => {
    test('should return a following property', async () => {
      // Given
      const username = 'RealWorld';
      const id = 123;

      const mockedResponse = {
        id: 123,
        username: 'RealWorld',
        email: 'realworld@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
        followedBy: [],
      };

      // When
      // @ts-ignore
      prismaMock.user.findUnique.mockResolvedValue(mockedResponse);

      // Then
      await expect(getProfile(username, id)).resolves.toHaveProperty('following');
    });

    test('should throw an error if no user is found', async () => {
      // Given
      const username = 'RealWorld';
      const id = 123;

      // When
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Then
      await expect(getProfile(username, id)).rejects.toThrowError();
    });
  });

  describe('followUser', () => {
    test('shoud return a following property', async () => {
      // Given
      const usernamePayload = 'AnotherUser';
      const id = 123;

      const mockedAuthUser = {
        id: 123,
        username: 'RealWorld',
        email: 'realworld@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
        followedBy: [],
      };

      const mockedResponse = {
        id: 123,
        username: 'AnotherUser',
        email: 'another@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
        followedBy: [],
      };

      // When
      prismaMock.user.findUnique.mockResolvedValue(mockedAuthUser);
      prismaMock.user.update.mockResolvedValue(mockedResponse);

      // Then
      await expect(followUser(usernamePayload, id)).resolves.toHaveProperty('following');
    });

    test('shoud throw an error if no user is found', async () => {
      // Given
      const usernamePayload = 'AnotherUser';
      const id = 123;

      // When
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Then
      await expect(followUser(usernamePayload, id)).rejects.toThrowError();
    });
  });

  describe('unfollowUser', () => {
    test('shoud return a following property', async () => {
      // Given
      const usernamePayload = 'AnotherUser';
      const id = 123;

      const mockedAuthUser = {
        id: 123,
        username: 'RealWorld',
        email: 'realworld@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
        followedBy: [],
      };

      const mockedResponse = {
        id: 123,
        username: 'AnotherUser',
        email: 'another@me',
        password: '1234',
        bio: null,
        image: null,
        token: '',
        demo: false,
        followedBy: [],
      };

      // When
      prismaMock.user.findUnique.mockResolvedValue(mockedAuthUser);
      prismaMock.user.update.mockResolvedValue(mockedResponse);

      // Then
      await expect(unfollowUser(usernamePayload, id)).resolves.toHaveProperty('following');
    });

    test('shoud throw an error if no user is found', async () => {
      // Given
      const usernamePayload = 'AnotherUser';
      const id = 123;

      // When
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Then
      await expect(unfollowUser(usernamePayload, id)).rejects.toThrowError();
    });
  });
});
