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
          <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
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
      <img className="rw-article-header__cover" src="avatar.jpeg" alt="user avatar" />
    </section>
    <aside className="rw-article-header__actions">
      <ul className="rw-tag-list-horizontal ">
        <li className="">
          <button className="rw-like-counter" aria-describedby="likes">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
            </svg>
            <span>355</span>
          </button>
        </li>
        <li className="">
          <button className="rw-comment-counter" aria-describedby="comments">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path d="M1.667 18.333V3.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v9.833q0 .729-.51 1.24-.511.51-1.24.51H5Zm1.75-4.229.854-.854h12.312V3.417H3.417Zm0-10.687v10.687Z" />
            </svg>
            <span>355</span>
          </button>
        </li>
        <li className="">
          <button className="rw-follow-counter" aria-describedby="followers">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path d="M10 10q-1.25 0-2.125-.875T7 7q0-1.25.875-2.125T10 4q1.25 0 2.125.875T13 7q0 1.25-.875 2.125T10 10Zm-6 6v-2q0-.479.26-.906.261-.427.719-.719 1.146-.667 2.427-1.021Q8.688 11 10 11q1.312 0 2.594.354 1.281.354 2.427 1.021.458.271.719.708.26.438.26.917v2Zm1.5-1.5h9V14q0-.104-.062-.198-.063-.094-.167-.135-.959-.584-2.042-.875Q11.146 12.5 10 12.5q-1.146 0-2.229.292-1.083.291-2.042.875-.104.083-.167.156-.062.073-.062.177Zm4.5-6q.625 0 1.062-.438Q11.5 7.625 11.5 7t-.438-1.062Q10.625 5.5 10 5.5t-1.062.438Q8.5 6.375 8.5 7t.438 1.062Q9.375 8.5 10 8.5ZM10 7Zm0 7.5Z" />
            </svg>
            <span>355</span>
          </button>
        </li>
      </ul>
      <ul className="rw-tag-list-horizontal ">
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
  </>
);
