export default {
  title: 'Templates/Settings',
};

export const Settings = () => (
  <div className="settings-page">
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
    <section>
      <form>
        <fieldset className="rl-file-form-group">
          <label>Avatar</label>
          <div className="rl-file-form-group__input-avatar">
            <img className="rl-avatar rl-avatar-xl" src="avatar.png" alt="user avatar" />
            <button className="rl-btn rl-btn-primary">Change</button>
            <button className="rl-btn rl-btn-warn">Remove</button>
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
        <button className="rl-btn rl-btn-secondary">Update</button>
      </form>
    </section>
  </div>
);
