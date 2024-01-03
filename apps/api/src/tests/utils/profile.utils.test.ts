import profileMapper from '../../app/utils/profile.utils';

describe('ProfileUtils', () => {
  describe('profileMapper', () => {
    test('should return a profile', () => {
      // Given
      const user = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        followedBy: [],
      };
      const id = 123;

      // When
      const expected = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        following: false,
      };

      // Then
      expect(profileMapper(user, id)).toEqual(expected);
    });

    test('should return a profile followed by the user', () => {
      // Given
      const user = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        followedBy: [
          {
            id: 123,
          },
        ],
      };
      const id = 123;

      // When
      const expected = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        following: true,
      };

      // Then
      expect(profileMapper(user, id)).toEqual(expected);
    });

    test('should return a profile not followed by the user', () => {
      // Given
      const user = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        followedBy: [
          {
            username: 'NotRealWorld',
          },
        ],
      };
      const id = 123;

      // When
      const expected = {
        username: 'RealWorld',
        bio: 'My happy life',
        image: null,
        following: false,
      };

      // Then
      expect(profileMapper(user, id)).toEqual(expected);
    });
  });
});
