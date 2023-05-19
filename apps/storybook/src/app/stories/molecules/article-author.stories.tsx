export default {
  title: 'Molecules/Article Author',
};

export const ArticleAuthor = () => (
  <a className="rw-article-author__container" href="">
    <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
    <div className="rw-article-author__content">
      <span>Gerome Grignon</span>
      <span className="rw-date">December 9, 2022</span>
    </div>
  </a>
);
