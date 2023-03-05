import coverImage from '../assets/cover-image_1.jpg';

export default {
  title: 'Pages/Home',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Home = () => (
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
    <section className="rw-home-header">
      <img className="rw-avatar-xxl rw-home-header__cover" src="avatar.png" alt="user avatar" />
    </section>
    <div className="rw-main">
      <div className="rw-home-page">
        <section className="rw-article-list">
          <aside className="rw-navbar-horizontal">
            <ul>
              <li>
                <a className="rw-link rw-active" href="">
                  Latest
                </a>
              </li>
              <li>
                <a className="rw-link" href="">
                  Following
                </a>
              </li>
              <li>
                <a className="rw-link" href="">
                  #Accessibility
                </a>
              </li>
            </ul>
          </aside>
          <article className="rw-article-preview">
            <a href="" tabIndex="-1">
              <img className="rw-article-preview__cover-image" src={coverImage} alt="" />
            </a>
            <section className="rw-article-preview__content">
              <a className="rw-article-author__container" href="">
                <img className="rw-avatar-sm" src="avatar.png" alt="user avatar" />
                <div className="rw-article-author__content">
                  <span>Gerome Grignon</span>
                  <span className="rw-date">December 9, 2022</span>
                </div>
              </a>
              <a className="rw-article-preview__content-title" href="">
                <h1>Skills you should mention in your resume for Role</h1>
              </a>
              <ul className="rw-tag-list-horizontal">
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
            </section>
            <aside className="rw-favorite-btn__container">
              <span>355</span>
              <button className="rw-favorite">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z" />
                </svg>
              </button>
            </aside>
          </article>
          <hr className="rw-article__divider" />
          <article className="rw-article-preview">
            <a href="" tabIndex="-1">
              <img className="rw-article-preview__cover-image" src={coverImage} alt="" />
            </a>
            <section className="rw-article-preview__content">
              <a className="rw-article-author__container" href="">
                <img className="rw-avatar-sm" src="avatar.png" alt="user avatar" />
                <div className="rw-article-author__content">
                  <span>Gerome Grignon</span>
                  <span className="rw-date">December 9, 2022</span>
                </div>
              </a>
              <a className="rw-article-preview__content-title" href="">
                <h1>Skills you should mention in your resume for an SDE Role</h1>
              </a>
              <ul className="rw-tag-list-horizontal">
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
            </section>
            <aside className="rw-favorite-btn__container">
              <span>355</span>
              <button className="rw-favorite">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z" />
                </svg>
              </button>
            </aside>
          </article>
        </section>
        <aside className="rw-popular-tags">
          <h2 className="rw-popular-tags__title">Popular Tags</h2>
          <ul className="rw-tag-list-vertical">
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
        </aside>
      </div>
    </div>
  </>
);
