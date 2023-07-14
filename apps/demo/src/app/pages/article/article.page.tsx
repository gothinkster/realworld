import { Link, useLoaderData, useParams } from 'react-router-dom';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { Article } from '../../models/article.model';
import CommentList from './components/comment-list';
import ArticleActions from './components/article-actions';
import TagList from '../../components/tag-list';
import { getArticle } from '../../services/article.service';
import FormattedDate from '../../components/formatted-date';
import Markup from '../../components/markup';

type Params = {
  slug: string;
};

const articleQuery = (slug: string) => ({
  queryKey: ['article', slug],
  queryFn: () => getArticle(slug),
});

export const loader =
  (queryClient: QueryClient) =>
  async (slug: string): Promise<{ data: Article }> => {
    const query = articleQuery(slug);

    return await queryClient.ensureQueryData(query);
  };

export default function ArticlePage() {
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
  const { slug } = useParams<Params>() as Params;

  const { data: article } = useQuery<Article>({
    ...articleQuery(slug),
    initialData: initialData.data,
  });

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <Link to={'/profile/' + article.author.username}>
              <img src={article.author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link to={'/profile/' + article.author.username} className="author">
                {article.author.username}
              </Link>
              <FormattedDate date={article.createdAt} />
            </div>
            <ArticleActions article={article} />
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <p>{article.description}</p>
            <Markup content={article.body} />
            <TagList tags={article.tagList} />
          </div>
        </div>

        <hr />

        <CommentList slug={slug} />
      </div>
    </div>
  );
}
