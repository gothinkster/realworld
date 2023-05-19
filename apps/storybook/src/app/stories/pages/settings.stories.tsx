export default {
  title: 'Pages/Settings',
};

export const ProfileSettings = () => (
  <>
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
    <main className="rw-main">
      <div className="settings-page">
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
        <section className="rw-settings__profile">
          <aside className="rw-banner__info">
            <span>Discover your public profile</span>
            <button className="rw-btn-warn">View</button>
          </aside>
          <form>
            <fieldset className="rw-file-form-group">
              <label>Avatar</label>
              <div className="rw-file-form-group__input-avatar">
                <img className="rw-avatar-xl" src="avatar.jpeg" alt="user avatar" />
                <button type="button" className="rw-btn-primary">
                  Change
                </button>
                <button type="button" className="rw-btn-warn">
                  Remove
                </button>
              </div>
              <input type="file" className="rw-input-file" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="name">Your name</label>
              <input id="name" className="rw-form-control" type="text" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" className="rw-form-control" rows={8}></textarea>
            </fieldset>
            <button type="submit" className="rw-btn-primary">
              Update
            </button>
          </form>
        </section>
      </div>
    </main>
  </>
);
export const SecuritySettings = () => (
  <>
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
    <main className="rw-main">
      <div className="settings-page">
        <aside className="rw-navbar-vertical">
          <ul>
            <li>
              <a className="rw-link" href="">
                Profile
              </a>
            </li>
            <li>
              <a className="rw-link rw-active" href="">
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
        <section className="rw-settings__profile">
          <form>
            <fieldset className="rw-form-group">
              <label htmlFor="name">Current password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="name">New password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="name">Confirm new password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>
            <button type="submit" className="rw-btn-primary">
              Update
            </button>
          </form>
          <hr />
          <aside className="rw-banner__error">
            <span>Delete my account</span>
            <button className="rw-btn-warn">Delete</button>
          </aside>
        </section>
      </div>
    </main>
  </>
);

/*
 - dark mode
 - optional notifications

 */
export const PreferencesSettings = () => (
  <>
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
    <main className="rw-main">
      <div className="settings-page">
        <aside className="rw-navbar-vertical">
          <ul>
            <li>
              <a className="rw-link" href="">
                Profile
              </a>
            </li>
            <li>
              <a className="rw-link rw-active" href="">
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
        <section className="rw-settings__profile">
          <aside className="rw-banner__info">
            <span>Discover your public profile</span>
            <button className="rw-btn-warn">View</button>
          </aside>
          <form>
            <fieldset className="rw-form-group">
              <label htmlFor="name">Current password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="name">New password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>
            <fieldset className="rw-form-group">
              <label htmlFor="name">Confirm new password</label>
              <input id="name" className="rw-form-control" type="password" />
            </fieldset>

            <button type="submit" className="rw-btn-primary">
              Update
            </button>
          </form>
        </section>
      </div>
    </main>
  </>
);
