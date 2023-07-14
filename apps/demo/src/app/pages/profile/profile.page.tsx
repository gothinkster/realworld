import { getProfile } from '../../services/profile.service';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { QueryClient, useQuery } from '@tanstack/react-query';
import FollowButton from '../../components/follow-button';
import { Article } from '../../models/article.model';
import { getArticles } from '../../services/article.service';
import ArticlePreview from '../../components/article-preview';
import { Pagination } from '../../components/pagination';
import { AuthContext } from '../../auth/auth.context';
import { Author } from '../../models/author.model';

export enum ProfileTab {
  MyArticles = 'my-articles',
  FavoritedArticles = 'favorited-articles',
}

type Params = {
  username: string;
};

interface Props {
  defaultTab: ProfileTab.MyArticles | ProfileTab.FavoritedArticles;
}

const profileQuery = (username: string) => ({
  queryKey: ['profile', username],
  queryFn: () => getProfile(username),
});

export const loader =
  (queryClient: QueryClient) =>
  async (username: string): Promise<{ data: Author }> => {
    const query = profileQuery(username);

    return await queryClient.ensureQueryData(query);
  };

export default function ProfilePage({ defaultTab }: Props) {
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
  const { username } = useParams<Params>() as Params;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: profile } = useQuery<Author>({
    ...profileQuery(username),
    initialData: initialData.data,
  });

  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<ProfileTab.MyArticles | ProfileTab.FavoritedArticles>(
    defaultTab,
  );
  const {
    data: articles,
    isLoading: isLoadingArticles,
    isFetching: isFetchingArticles,
  } = useQuery<{
    articles: Article[];
    articlesCount: number;
  }>({
    queryKey: ['articles', 'profile', username, activeTab, page],
    queryFn: ({ signal }) => {
      if (activeTab === ProfileTab.MyArticles) {
        return getArticles({ offset: (page - 1) * 10, limit: 5, author: username }, signal);
      } else {
        return getArticles({ offset: (page - 1) * 10, limit: 5, favorited: username }, signal);
      }
    },
  });

  useEffect(() => {
    setActiveTab(ProfileTab.MyArticles);
    setPage(1);
  }, [username]);

  const isAuthor = user && profile && user.username === profile.username;

  function switchTab(
    tab: ProfileTab.MyArticles | ProfileTab.FavoritedArticles,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) {
    event.preventDefault();

    if (activeTab === tab) {
      return;
    }

    setActiveTab(tab);
    setPage(1);

    if (tab === ProfileTab.MyArticles) {
      navigate('./..', { replace: true });
    } else {
      navigate('favorites', { replace: true });
    }
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" alt="profile avatar" />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
              {isAuthor && (
                <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i> Edit Profile Settings
                </Link>
              )}

              {!isAuthor && (
                <FollowButton username={profile.username} following={profile.following} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === ProfileTab.MyArticles ? 'active' : ''}`}
                    href=""
                    onClick={event => switchTab(ProfileTab.MyArticles, event)}
                  >
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === ProfileTab.FavoritedArticles ? 'active' : ''
                    }`}
                    href=""
                    onClick={event => switchTab(ProfileTab.FavoritedArticles, event)}
                  >
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            {isFetchingArticles && <div>Loading articles...</div>}
            {!isFetchingArticles &&
              articles &&
              articles.articles &&
              articles.articles.map((article: Article) => (
                <ArticlePreview article={article} key={article.slug} />
              ))}
            {!isLoadingArticles &&
              articles &&
              articles.articles &&
              articles.articles.length === 0 && <div>No articles are here... yet.</div>}

            {!isFetchingArticles && articles && articles.articlesCount > 10 && (
              <Pagination count={articles.articlesCount} limit={10} update={setPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
