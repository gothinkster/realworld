export default {
  title: 'Organisms/Article Form Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArticleFormHeader = () => (
  <section className="rw-article-form-header">
    <h2>Create new article</h2>
    <img
      className="rl-avatar-xl rw-article-form-header__cover"
      src="avatar.png"
      alt="user avatar"
    />
  </section>
);
