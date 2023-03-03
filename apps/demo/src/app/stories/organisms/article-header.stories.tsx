export default {
  title: 'Organisms/Article Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArticleHeader = () => (
  <section className="rw-article-header">
    <hgroup className="rw-article-header__title">
      <a className="rl-article-author__container" href="">
        <img className="rl-avatar-sm" src="avatar.png" alt="user avatar" />
        <div className="rl-article-author__content">
          <span>Gerome Grignon</span>
          <span className="rl-article-author__content-date">December 9, 2022</span>
        </div>
      </a>
      <h3>Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur blanditiis,
        cumque, debitis dicta error facere, id in ipsum iste maiores minus nesciunt numquam
        perspiciatis quo quod ratione reiciendis rerum.
      </p>
    </hgroup>
    <img className="rw-article-header__cover" src="avatar.png" alt="user avatar" />
    <button className="rl-btn-secondary rw-btn-follow">Like me</button>
  </section>
);
