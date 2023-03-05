export default {
  title: 'Organisms/Settings',
};

export const Settings = () => (
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
    <section>
      <form>
        <fieldset className="rw-file-form-group">
          <label>Avatar</label>
          <div className="rw-file-form-group__input-avatar">
            <img className="rw-avatar-xl" src="avatar.png" alt="user avatar" />
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
);
