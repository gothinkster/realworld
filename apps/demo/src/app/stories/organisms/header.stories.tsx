export default {
  title: 'Organisms/Header',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Header = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>
      <ul className="navbar-links">
        <li className="nav-item">
          <a className="rw-link" href="">
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-btn-primary" href="">
            Create account
          </a>
        </li>
      </ul>
    </nav>

    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>
      <ul className="navbar-links">
        <li className="nav-item">
          <a className="rw-btn-default" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            Gerome
          </a>
        </li>
      </ul>
    </nav>

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
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            Gerome
          </a>
        </li>
      </ul>
    </nav>

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
  </div>
);
