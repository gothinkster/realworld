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
          <a className="rw-btn-default" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            <img className="rw-avatar" src="avatar.jpeg" alt="user avatar" />
          </a>
        </li>
      </ul>
    </nav>
    <section className="rw-home-header">
      <img className="rw-avatar-xxl rw-home-header__cover" src="energy.png" alt="user avatar" />
    </section>
    <div className="rw-main">
      <div className="rw-home-page">
        <section className="rw-tab-container">
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
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
                <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
            <aside className="rw-counter__container">
              <button className="rw-like-counter" aria-describedby="likes">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                  <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
                </svg>
                <span>355</span>
              </button>
            </aside>
          </article>
          <div className="rw-pagination">
            <label>
              Page
              <input type="text" value={1} className="rw-pagination__input" />
            </label>
            <span>1 - 25 of 100</span>
            <ul className="rw-pagination__buttons">
              <li>
                <button className="rw-pagination__button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path d="M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="rw-pagination__button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="rw-pagination__button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="rw-pagination__button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path d="m7 18-1.4-1.4 4.6-4.6-4.6-4.6L7 6l6 6Zm9 0V6h2v12Z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
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
