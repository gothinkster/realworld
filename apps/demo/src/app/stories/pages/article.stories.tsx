export default {
  title: 'Pages/Article',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Article = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rl-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            <img className="rl-avatar" src="avatar.png" alt="user avatar" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rl-main">
      <section className="rw-article-header">
        <hgroup className="rw-article-header__title">
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
    </main>
  </>
);
