export default {
  title: 'Pages/Settings',
};

export const Settings = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rl-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            <img className="rl-avatar" src="avatar.png" alt="user avatar image" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rl-main">
      <div className="settings-page">
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
        <section>
          <form>
            <fieldset className="rl-file-form-group">
              <label>Avatar</label>
              <div className="rl-file-form-group__input-avatar">
                <img className="rl-avatar-xl" src="avatar.png" alt="user avatar" />
                <button type="button" className="rl-btn-primary">
                  Change
                </button>
                <button type="button" className="rl-btn-warn">
                  Remove
                </button>
              </div>
              <input type="file" className="rl-input-file" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="name">Your name</label>
              <input id="name" className="rl-form-control" type="text" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" className="rl-form-control" rows={8}></textarea>
            </fieldset>
            <button type="submit" className="rl-btn-primary">
              Update
            </button>
          </form>
        </section>
      </div>
    </main>
  </>
);
