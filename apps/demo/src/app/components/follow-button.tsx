import { useContext, useState } from 'react';
import { followUser, unfollowUser } from '../services/profile.service';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Author } from '../models/author.model';
import { AuthContext } from '../auth/auth.context';
import { Article } from '../models/article.model';

const FOLLOWING_CLASS = 'btn btn-sm action-btn btn-secondary';
const NOT_FOLLOWING_CLASS = 'btn btn-sm action-btn btn-outline-secondary';

interface Props {
  username: string;
  following: boolean;
  slug?: string;
}

export default function FollowButton({ username, following, slug }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const useFollowAuthor = useMutation({
    mutationFn: followUser,
    onMutate: (username: string) => {
      let oldData: Article | Author | undefined;
      if (slug) {
        oldData = queryClient.getQueryData(['article', slug]);
        queryClient.setQueryData(['article', slug], (old: Article | undefined) => {
          if (old) {
            return { ...old, author: { ...old.author, following: true } };
          } else {
            return old;
          }
        });
      } else {
        oldData = queryClient.getQueryData(['profile', username]);
        queryClient.setQueryData(['profile', username], (old: Author | undefined) => {
          if (old) {
            return { ...old, following: true };
          } else {
            return old;
          }
        });
      }

      return { oldData };
    },
    onError: (err, slug, context) => {
      if (slug) {
        queryClient.setQueryData(['article', slug], context?.oldData);
      } else {
        queryClient.setQueryData(['profile', username], context?.oldData);
      }
    },
    onSettled: (data, error, slug) => {
      if (slug) {
        queryClient.invalidateQueries(['article', slug]);
      } else {
        queryClient.invalidateQueries(['profile', username]);
      }
    },
  });

  const useUnfollowAuthor = useMutation({
    mutationFn: unfollowUser,
    onMutate: (username: string) => {
      let oldData: Article | Author | undefined;
      if (slug) {
        oldData = queryClient.getQueryData(['article', slug]);
        queryClient.setQueryData(['article', slug], (old: Article | undefined) => {
          if (old) {
            return { ...old, author: { ...old.author, following: false } };
          } else {
            return old;
          }
        });
      } else {
        oldData = queryClient.getQueryData(['profile', username]);
        queryClient.setQueryData(['profile', username], (old: Author | undefined) => {
          if (old) {
            return { ...old, following: false };
          } else {
            return old;
          }
        });
      }

      return { oldData };
    },
    onError: (err, variables, context) => {
      if (slug) {
        queryClient.setQueryData(['article', slug], context?.oldData);
      } else {
        queryClient.setQueryData(['profile', username], context?.oldData);
      }
    },
    onSettled: (data, error, slug, context) => {
      if (slug) {
        queryClient.setQueryData(['article', slug], context?.oldData);
      } else {
        queryClient.setQueryData(['profile', username], context?.oldData);
      }
    },
  });

  async function handleFollow(): Promise<void> {
    if (!user) {
      navigate('/register');
    }

    setIsLoading(true);

    if (following) {
      useUnfollowAuthor.mutate(username);
    } else {
      useFollowAuthor.mutate(username);
    }

    setIsLoading(false);
  }

  return (
    <button
      className={following ? FOLLOWING_CLASS : NOT_FOLLOWING_CLASS}
      onClick={handleFollow}
      disabled={isLoading}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {following ? 'Unfollow' : 'Follow'} {username}
    </button>
  );
}
