export default {
  title: 'Molecules/Pagination',
};

export const Pagination = () => (
  <div className="rw-pagination">
    <div className="rw-pagination__informations">
      <label>
        Page
        <input type="text" value={1} className="rw-pagination__input" />
      </label>
      <span>1 - 25 of 100</span>
    </div>
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
);
