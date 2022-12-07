import { User } from '../models/user.model';

const authorMapper = (author: any, username?: string) => ({
  username: author.username,
  bio: author.bio,
  image: author.image,
  following: username
    ? author?.followedBy.some((followingUser: Partial<User>) => followingUser.username === username)
    : false,
});

export default authorMapper;
