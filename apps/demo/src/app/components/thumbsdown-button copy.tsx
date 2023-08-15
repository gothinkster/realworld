import { useContext, useState } from 'react';
import { unfavoriteArticle, thumbsDownArticle } from '../services/article.service';
import { Article } from '../models/article.model';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/auth.context';

interface Props {
  article: Article;
  isExtended?: boolean;
}

export default function ThumbsDownButton({ article, isExtended }: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(article);

  const [count, setCount] = useState(0);
  const [unliked, setUnliked] = useState(article.unliked);
  const [isLoading, setIsLoading] = useState(false);

  async function updateCount(): Promise<void> {
    if (!user) {
      navigate('/register');
    }

    setIsLoading(true);
    setCount(prevCount => prevCount === 0 ? 1 : 0);
    await thumbsDownArticle(article.slug);
    setIsLoading(false);
  }

  if (isExtended) {
    return (
      <button
        className={`btn btn-sm btn-${!unliked ? 'outline-' : ''}primary`}
        onClick={updateCount}
        disabled={isLoading}
      >
        <i className="ion-thumb-down"></i> {unliked ? 'UnLiked' : 'Liked'} Article{' '}
        <span className="counter">({count})</span>
      </button>
    );
  } else {
    return (
      <button
        className={`btn btn-sm btn-${!unliked ? 'outline-' : ''}primary pull-xs-right`}
        onClick={updateCount}
        disabled={isLoading}
      >
         👎{count}
      </button>
    );
  }
}
