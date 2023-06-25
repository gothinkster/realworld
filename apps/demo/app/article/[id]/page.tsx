import CommentList from '../components/comment-list';
import Link from 'next/link';
import ArticleActions from '../components/article-actions';
import { marked } from 'marked';

export default async function Page({ params }: { params: { id: string } }) {
  const article = await fetch(`https://api.realworld.io/api/articles/${params.id}`)
    .then(res => res.json())
    .then(res => res.article);

  if (!article) {
    return <div>Loading...</div>;
  }

  if (article) {
    console.log(article.body);
    const markup = {
      __html: marked(article.body.replace('\\n', '\n'), {
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
                <span className="date">{new Date(article.createdAt).toDateString()}</span>
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

          <CommentList />
        </div>
      </div>
    );
  }
}
