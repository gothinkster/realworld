'use client';
import { useContext, useState } from 'react';
import { AuthContext } from '../auth/auth.context';
import { useRouter } from 'next/navigation';
import { favoriteArticle, unfavoriteArticle } from '../services/article.service';
import { Article } from '../models/article.model';
import { mutate } from 'swr';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

interface FavoriteButtonProps {
  article: Article;
  isExtended?: boolean;
}

export default function FavoriteButton({ article, isExtended }: FavoriteButtonProps) {
  console.log('article', article.favorited);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [count, setCount] = useState(article.favoritesCount);
  const [isFavorited, setIsFavorited] = useState(article.favorited);
  const [isLoading, setIsLoading] = useState(false);

  async function updateCount() {
    if (!user) {
      router.push('/register');
      return;
    }

    setIsLoading(true);

    if (article.favorited) {
      setCount(count - 1);
      setIsFavorited(false);
      mutate(`/api/articles/${article.slug}`, {
        ...article,
        favorited: false,
        favoritesCount: count - 1,
      });
      await unfavoriteArticle(article.slug);
    } else {
      setCount(count + 1);
      setIsFavorited(true);
      mutate(`/api/articles/${article.slug}`, {
        ...article,
        favorited: true,
        favoritesCount: count + 1,
      });
      await favoriteArticle(article.slug);
    }

    setIsLoading(false);
  }

  if (isExtended) {
    return (
      <button
        className={isFavorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS}
        onClick={updateCount}
        disabled={isLoading}
      >
        <i className="ion-heart"></i> {isFavorited ? 'Unfavorite' : 'Favorite'} Article{' '}
        <span className="counter">({count})</span>
      </button>
    );
  } else {
    return (
      <button
        className={isFavorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS}
        onClick={updateCount}
        disabled={isLoading}
      >
        <i className="ion-heart"></i>
        {count}
      </button>
    );
  }
}
