import Link from 'next/link';
import FavoriteButton from './favorite-button';
import { Article } from '../models/article.model';

interface ArticlePreviewProps {
  article: Article;
}

export default function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={article.author.image} />
        </a>
        <div className="info">
          <Link href={'profile/' + article.author.username} className="author">
            {article.author.username}
          </Link>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
        </div>
        <FavoriteButton article={article} />
      </div>
      <Link href={'article/' + article.slug} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag, index) => (
            <li key={index} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
