export default {
  title: 'Organisms/Article Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArticleHeader = () => (
  <>
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
      <button className="rw-btn-secondary rw-btn-follow">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
          <path d="M720 912H264V432l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906 589L786.93 868.199Q778 888 760 900t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Zm-72-30v72H120v336h144v72H48V432h216Z" />
        </svg>{' '}
        <span>Like me</span>
      </button>
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
  </>
);
