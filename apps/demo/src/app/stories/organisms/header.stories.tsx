export default {
  title: 'Organisms/Header',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Header = () => (
  <>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="">
              Log in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Create account
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-compose"></i>&nbsp;Create Article
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Gerome
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
