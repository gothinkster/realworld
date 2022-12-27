export default {
  title: 'Molecules/NavBar',
};

export const NavBar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ display: 'flex' }}>
      <aside className="rl-navbar">
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

    <div style={{ display: 'flex' }}>
      <aside className="rl-navbar">
        <ul>
          <li>
            <a className="rl-link" href="">
              Profile
            </a>
          </li>
          <li>
            <a className="rl-link rl-active" href="">
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
  </div>
);
