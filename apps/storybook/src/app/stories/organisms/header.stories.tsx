export default {
  title: 'Organisms/Header',
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
};

export const Header = () => (
  <nav className="navbar">
    <a className="navbar-title" href="">
      <img className="navbar-title__logo" src="energy.png" alt="" aria-hidden={true} />
      <h1 className="navbar-title__label">conduit</h1>
    </a>

    <ul className="navbar-links">
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
);
