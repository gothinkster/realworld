export default {
  title: 'Templates/Auth/Create Account',
};

export const CreateAccount = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Create account</h1>
          <p className="text-xs-center">
            <a href="apps/demo/src/app/stories/templates/auth/create-account.stories">
              Have an account?
            </a>
          </p>

          <ul className="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form>
            <fieldset className="rl-form-group">
              <label htmlFor="name">Name</label>
              <input id="name" className="rl-form-control" type="text" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="email">Email</label>
              <input id="email" className="rl-form-control" type="text" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="password">Password</label>
              <input id="password" className="rl-form-control" type="password" />
            </fieldset>
            <button className="rl-btn rl-btn-lg rl-btn-primary" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
