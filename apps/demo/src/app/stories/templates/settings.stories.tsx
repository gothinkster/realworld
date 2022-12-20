export default {
  title: 'Templates/Settings',
};

export const Settings = () => (
  <>
    <div className="settings-page">
      <aside>
        <ul>
          <li>
            <a className="rl-active" href="">
              Profile
            </a>
          </li>
          <li>
            <a href="">Security</a>
          </li>
        </ul>
      </aside>
      <section>
        <form>
          <img className="rl-avatar rl-avatar-xxl" src="avatar.png" alt="user avatar image" />
          <fieldset className="rl-form-group">
            <label htmlFor="name">Your name</label>
            <input id="name" className="rl-form-control" type="text" />
          </fieldset>
          <fieldset className="rl-form-group">
            <label htmlFor="bio"></label>
            <textarea
              id="bio"
              className="rl-form-control"
              rows={8}
              placeholder="Short bio about you"
            ></textarea>
          </fieldset>
          <fieldset className="rl-form-group">
            <label htmlFor="email"></label>
            <input id="email" className="rl-form-control" type="text" />
          </fieldset>
          <button className="rl-btn rl-btn-secondary">Update</button>
        </form>
      </section>
    </div>
  </>
);
