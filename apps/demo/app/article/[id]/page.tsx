'use client';

import CommentList from '../components/comment-list';
import Link from 'next/link';
import ArticleActions from '../components/article-actions';
import { marked } from 'marked';
import { useArticle } from '../hooks/article.hook';
import { dateFormatter } from '../../utils/date.utils';

export default function Page({ params }: { params: { id: string } }) {
  const { article } = useArticle(params.id);

  if (!article) {
    return <div>Loading...</div>;
  }

  if (article) {
    const markup = {
      __html: marked(article.body, {
        sanitize: true,
        breaks: true,
        gfm: true,
      }),
    };

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>

            <div className="article-meta">
              <a href={'profile/' + article.author.username}>
                <img src={article.author.image} />
              </a>
              <div className="info">
                <Link href={'profile/' + article.author.username} className="author">
                  {article.author.username}
                </Link>
                <span className="date">{dateFormatter(article.createdAt)}</span>
              </div>
              <ArticleActions article={article} />
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <p>{article.description}</p>
              <div dangerouslySetInnerHTML={markup}></div>
              <ul className="tag-list">
                {article.tagList.map((tag: string, index: number) => (
                  <li key={index} className="tag-default tag-pill tag-outline">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />

          <CommentList slug={article.slug} />
        </div>
      </div>
    );
  }
}
