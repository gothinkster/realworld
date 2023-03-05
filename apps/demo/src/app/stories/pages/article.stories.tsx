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
          <input className="rw-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rw-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            <img className="rw-avatar" src="avatar.png" alt="user avatar" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rw-main">
      <section className="rw-article-header">
        <hgroup className="rw-article-header__title">
          <a className="rw-article-author__container" href="">
            <img className="rw-avatar-sm" src="avatar.png" alt="user avatar" />
            <div className="rw-article-author__content">
              <span>Gerome Grignon</span>
              <span className="rw-date">December 9, 2022</span>
            </div>
          </a>
          <h2>Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur blanditiis,
            cumque, debitis dicta error facere, id in ipsum iste maiores minus nesciunt numquam
            perspiciatis quo quod ratione reiciendis rerum.
          </p>
        </hgroup>
        <img className="rw-article-header__cover" src="avatar.png" alt="user avatar" />
        <button className="rw-btn-secondary rw-btn-follow">Like me</button>
      </section>
      <ul className="rw-tag-list-horizontal rw-article-header__tags">
        <li className="rw-tag">
          <a href="">#web</a>
        </li>
        <li className="rw-tag">
          <a href="">#chill</a>
        </li>
        <li className="rw-tag">
          <a href="">#batman</a>
        </li>
      </ul>
      <section className="rw-article__content">
        <p>
          Favicons, short for “favorite icons,” are small images or icons that appear in the browser
          tab, bookmarks, and other areas of the browser UI. Adding a favicon to your Storybook
          application can help to:
        </p>
        <ul>
          <li>
            Improve branding and visual appeal: A well-designed favicon can help to reinforce your
            brand and make your Storybook application more visually appealing.
          </li>
          <li>
            Enhance user experience: Favicons can make it easier for users to find and recognize
            your Storybook application among multiple tabs or bookmarks, enhancing the user
            experience.
          </li>
          <li>
            Build trust and credibility: A favicon can also help build trust and credibility with
            your users by demonstrating attention to detail and a commitment to providing a
            professional and high-quality application.
          </li>
        </ul>
        <p>
          Adding a favicon is a small but significant step that can help improve the user experience
          and make your Storybook application more memorable and distinctive.
        </p>
        <p>
          So why not take this small but impactful step today and give your Storybook application
          that extra touch of visual appeal and professionalism?
        </p>
      </section>
    </main>
  </>
);
