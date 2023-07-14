import { useContext, useState } from 'react';
import { Article } from '../../../models/article.model';
import { Link, useNavigate } from 'react-router-dom';
import FollowButton from '../../../components/follow-button';
import { deleteArticle } from '../../../services/article.service';
import FavoriteButton from '../../../components/favorite-button';
import { AuthContext } from '../../../auth/auth.context';

interface Props {
  article: Article;
}

export default function ArticleActions({ article }: Props) {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleDelete(): Promise<void> {
    setIsLoading(true);
    const response = await deleteArticle(article.slug);
    setIsLoading(false);

    if (response.ok) {
      navigate('/');
      return;
    }
  }

  if (user && user.username === article.author.username) {
    return (
      <>
        <Link
          className="btn btn-outline-secondary btn-sm"
          ui-sref="app.editor({ slug: $ctrl.article.slug })"
          to={'/editor/' + article.slug}
        >
          <i className="ion-edit"></i> Edit Article
        </Link>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
          disabled={isLoading}
        >
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </>
    );
  } else {
    return (
      <>
        <FollowButton
          username={article.author.username}
          following={article.author.following}
          slug={article.slug}
        />
        &nbsp;
        <FavoriteButton article={article} isExtended={true} />
      </>
    );
  }
}
