import { User } from '../models/user.model';

const authorMapper = (author: any, id?: number) => ({
  username: author.username,
  bio: author.bio,
  image: author.image,
  following: id
    ? author?.followedBy.some((followingUser: Partial<User>) => followingUser.id === id)
    : false,
});

export default authorMapper;
