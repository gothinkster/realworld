export default {
  title: 'Organisms/Popular Tags',
};

export const PopularTags = () => (
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
);
