export default {
  title: 'Molecules/Article Author',
};

export const ArticleAuthor = () => (
  <a className="rl-article-author__container" href="">
    <img className="rl-avatar-sm" src="avatar.png" alt="user avatar" />
    <div className="rl-article-author__content">
      <span>Gerome Grignon</span>
      <span className="rl-article-author__content-date">December 9, 2022</span>
    </div>
  </a>
);
