import { navbarSourceDocs } from './navbar.utils';

export default {
  title: 'Molecules/Navbar',
};

export const Navbar = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <aside className="rl-navbar-vertical">
        <ul>
          <li>
            <a className="rl-link rl-active" href="">
              Profile
            </a>
          </li>
          <li>
            <a className="rl-link" href="">
              Security
            </a>
          </li>
          <li>
            <a className="rl-link" href="">
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
      <aside className="rl-navbar-horizontal">
        <ul>
          <li>
            <a className="rl-link rl-active" href="">
              Latest
            </a>
          </li>
          <li>
            <a className="rl-link" href="">
              Following
            </a>
          </li>
          <li>
            <a className="rl-link" href="">
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
