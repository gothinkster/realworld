// TODO: to be merged with the api project with v2

type Article = {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
    slug: string;
    favorited: boolean;
    favoritesCount: number;
  };
};
type User = { user: { token: string; username: string; email: string } };
type Profile = { profile: { username: string; bio: string; image: string; following: boolean } };
