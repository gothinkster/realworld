import { navbarSourceDocs } from './navbar.utils';

export default {
  title: 'Molecules/Navbar',
};

export const Navbar = () => (
  <div style={{ display: 'flex' }}>
    <aside className="rl-navbar-vertical">
      <ul>
        <li>
          <a
            className="rl-link rl-active"
            href="apps/demo/src/app/stories/molecules/navbar/navbar.stories"
          >
            Profile
          </a>
        </li>
        <li>
          <a className="rl-link" href="apps/demo/src/app/stories/molecules/navbar/navbar.stories">
            Security
          </a>
        </li>
        <li>
          <a className="rl-link" href="apps/demo/src/app/stories/molecules/navbar/navbar.stories">
            Preferences
          </a>
        </li>
      </ul>
    </aside>
  </div>
);
Navbar.storyName = 'navbar (vertical)';
Navbar.parameters = {
  ...navbarSourceDocs({ orientation: 'vertical' }),
};

export const NavbarHorizontal = () => (
  <div style={{ display: 'flex' }}>
    <aside className="rl-navbar-horizontal">
      <ul>
        <li>
          <a
            className="rl-link rl-active"
            href="apps/demo/src/app/stories/molecules/navbar/navbar.stories"
          >
            Latest
          </a>
        </li>
        <li>
          <a className="rl-link" href="apps/demo/src/app/stories/molecules/navbar/navbar.stories">
            Following
          </a>
        </li>
        <li>
          <a className="rl-link" href="apps/demo/src/app/stories/molecules/navbar/navbar.stories">
            #Accessibility
          </a>
        </li>
      </ul>
    </aside>
  </div>
);
NavbarHorizontal.storyName = 'navbar (horizontal)';
NavbarHorizontal.parameters = {
  ...navbarSourceDocs({ orientation: 'horizontal' }),
};
