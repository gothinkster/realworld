import ArticleList from '../../components/article-list';

export default async function Page() {
  return <ArticleList limit={5} />;
}
