import PopularTags from './components/popular-tags';
import { useQuery } from '@tanstack/react-query';
import ArticlePreview from '../../components/article-preview';
import { Pagination } from '../../components/pagination';
import { Article } from '../../models/article.model';
import { getArticles, getPersonalFeed } from '../../services/article.service';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/auth.context';

enum Tab {
  Global = 'global',
  Personal = 'personal',
  Tag = 'tag',
}

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<'global' | 'personal' | 'tag'>(user ? Tab.Personal : Tab.Global);
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
  const { data, isLoading } = useQuery<{ articles: Article[]; articlesCount: number }>({
    queryKey: ['articles', 'home', tab, activeTag, page],
    queryFn: ({ signal }) => {
      if (tab === Tab.Global) {
        return getArticles({ offset: (page - 1) * 10 }, signal);
      } else if (tab === Tab.Personal) {
        return getPersonalFeed({ offset: (page - 1) * 10 }, signal);
      } else {
        return getArticles({ offset: (page - 1) * 10, tag: activeTag }, signal);
      }
    },
  });

  function switchTab(tab: Tab, event: React.MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    setTab(tab);
    setPage(1);
  }

  function updateTag(tag: string): void {
    setActiveTag(tag);
    setTab(Tab.Tag);
    setPage(1);
  }

  return (
    <div className="home-page">
      {!user && (
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
      )}

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {user && (
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab === Tab.Personal ? 'active' : ''}`}
                      href=""
                      onClick={event => switchTab(Tab.Personal, event)}
                    >
                      Your Feed
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a
                    className={`nav-link ${tab === Tab.Global ? 'active' : ''}`}
                    href=""
                    onClick={event => switchTab(Tab.Global, event)}
                  >
                    Global Feed
                  </a>
                </li>
                {activeTag && (
                  <li className="nav-item">
                    <a
                      className={`nav-link ${tab === Tab.Tag ? 'active' : ''}`}
                      href=""
                      onClick={event => switchTab(Tab.Tag, event)}
                    >
                      #{activeTag}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {isLoading && <div>Loading articles...</div>}
            {!isLoading &&
              data &&
              data.articles &&
              data.articles.map((article: Article) => (
                <ArticlePreview article={article} key={article.slug} />
              ))}
            {!isLoading && data && data.articles && data.articles.length === 0 && (
              <div>No articles are here... yet.</div>
            )}

            {!isLoading && data && data.articlesCount > 10 && (
              <Pagination count={data.articlesCount} limit={10} update={setPage} />
            )}
          </div>

          <div className="col-md-3">
            <PopularTags updateTag={updateTag} />
          </div>
        </div>
      </div>
    </div>
  );
}
