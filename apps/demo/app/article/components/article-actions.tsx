'use client';

import { AuthContext } from '../../auth/auth.context';
import { useContext } from 'react';
import { Article } from '../../models/article.model';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FollowButton from '../../components/follow-button';
import FavoriteButton from '../../components/favorite-button';

interface ArticleActionsProps {
  article: Article;
}

export default function ArticleActions({ article }: ArticleActionsProps) {
  const { user } = useContext(AuthContext);
  const isAuthor = user && user.username === article.author.username;
  const router = useRouter();

  async function deleteArticle(): Promise<void> {
    const response = await fetch(`https://api.realworld.io/api/articles/${article.slug}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      router.push('/');
      return;
    }
  }

  if (isAuthor) {
    return (
      <>
        <Link className="btn btn-outline-secondary btn-sm" href={`/editor/${article.slug}`}>
          <i className="ion-edit"></i> Edit Article
        </Link>
        &nbsp;&nbsp;
        <button className="btn btn-outline-danger btn-sm" onClick={deleteArticle}>
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </>
    );
  } else {
    return (
      <>
        <FollowButton username={article.author.username} following={article.author.following} />
        &nbsp;
        <FavoriteButton article={article} isExtended={true} />
      </>
    );
  }
}
