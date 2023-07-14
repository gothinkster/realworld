import { Article } from '../models/article.model';
import { Link } from 'react-router-dom';
import TagList from './tag-list';
import FormattedDate from './formatted-date';
import FavoriteButton from './favorite-button';

interface Props {
  article: Article;
}

export default function ArticlePreview({ article }: Props) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={'/profile/' + article.author.username}>
          <img decoding="sync" src={article.author.image} alt="author avater" />
        </Link>
        <div className="info">
          <Link to={'/profile/' + article.author.username} className="author">
            {article.author.username}
          </Link>
          <FormattedDate date={article.createdAt} />
        </div>
        <FavoriteButton article={article} />
      </div>
      <Link to={'/article/' + article.slug} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <TagList tags={article.tagList} />
      </Link>
    </div>
  );
}
