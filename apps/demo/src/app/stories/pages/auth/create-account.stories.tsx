export default {
  title: 'Pages/Auth/Create Account',
  parameters: {
    layout: 'centered',
  },
};

export const CreateAccount = () => (
  <div className="auth-page">
    <h1 className="rl-page-title auth-title">Create account</h1>
    <a className="rl-link-underlined" href="">
      Have an account?
    </a>

    <form method="dialog" className="auth-form">
      <fieldset className="rl-form-group">
        <label htmlFor="name">Name</label>
        <input id="name" className="rl-form-control" type="text" autoComplete="off" autoFocus />
      </fieldset>
      <fieldset className="rl-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rl-form-control" type="text" autoComplete="off" />
      </fieldset>
      <fieldset className="rl-form-group">
        <label htmlFor="password">Password</label>
        <div className="hint-banner">
          Must include at least 8 characters, one number, and one uppercase letter.
        </div>
        <input
          id="password"
          className="rl-form-control"
          type="password"
          autoComplete="new-password"
        />
      </fieldset>
      <button className="rl-btn-primary" type="submit">
        Create
      </button>
    </form>
  </div>
);
