export default {
  title: 'Templates/Settings',
};

export const Settings = () => (
  <div className="settings-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="rl-form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset className="form-group">
                <input className="rl-form-control" type="text" placeholder="Your Name" />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="rl-form-control"
                  rows={8}
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input className="rl-form-control" type="text" placeholder="Email" />
              </fieldset>
              <fieldset className="form-group">
                <input className="rl-form-control" type="password" placeholder="Password" />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button className="btn btn-outline-danger">Or click here to logout.</button>
        </div>
      </div>
    </div>
  </div>
);
