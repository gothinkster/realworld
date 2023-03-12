import { navbarSourceDocs } from './navbar.utils';

export default {
  title: 'Molecules/Navbar',
};

export const Navbar = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <aside className="rw-navbar-vertical">
        <ul>
          <li>
            <a className="rw-link rw-active" href="">
              Profile
            </a>
          </li>
          <li>
            <a className="rw-link" href="">
              Security
            </a>
          </li>
          <li>
            <a className="rw-link" href="">
              Preferences
            </a>
          </li>
        </ul>
      </aside>
    </div>
  ),

  name: 'navbar (vertical)',

  parameters: {
    ...navbarSourceDocs({ orientation: 'vertical' }),
  },
};

export const NavbarHorizontal = {
  render: () => (
    <div style={{ display: 'flex' }}>
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
    </div>
  ),

  name: 'navbar (horizontal)',

  parameters: {
    ...navbarSourceDocs({ orientation: 'horizontal' }),
  },
};

export const NavbarHorizontalLoading = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
      <aside className="rw-progress-bar">
        <div className="rw-progress-bar-value"></div>
      </aside>
    </div>
  ),

  name: 'navbar (horizontal) with loading',

  parameters: {
    ...navbarSourceDocs({ orientation: 'horizontal' }),
  },
};
