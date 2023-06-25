'use client';
import { useContext, useState } from 'react';
import { AuthContext } from '../auth/auth.context';
import { useRouter } from 'next/navigation';
import { favoriteArticle, unfavoriteArticle } from '../services/article.service';
import { Article } from '../models/article.model';

interface FavoriteButtonProps {
  article: Article;
  isExtended?: boolean;
}

export default function FavoriteButton({ article, isExtended }: FavoriteButtonProps) {
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
      await favoriteArticle(article.slug);
      // TODO: update article
    } else {
      setCount(count + 1);
      setIsFavorited(true);
      await unfavoriteArticle(article.slug);
      // TODO: update article
    }

    setIsLoading(false);
  }

  if (isExtended) {
    return (
      <button className="btn btn-sm btn-primary" onClick={updateCount} disabled={isLoading}>
        <i className="ion-heart"></i> {isFavorited ? 'Unfavorite' : 'Favorite'} Article{' '}
        <span className="counter">({count})</span>
      </button>
    );
  } else {
    return (
      <button className="btn btn-sm btn-outline-primary" onClick={updateCount} disabled={isLoading}>
        <i className="ion-heart"></i>
        {count}
      </button>
    );
  }
}
