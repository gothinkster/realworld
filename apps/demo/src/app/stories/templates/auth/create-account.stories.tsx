export default {
  title: 'Templates/Auth/Create Account',
};

export const CreateAccount = () => (
  <div className="auth-page">
    <h1 className="auth-title">Create account</h1>
    <a className="rl-link" href="">
      Have an account?
    </a>

    <form className="auth-form">
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
        <div className="hint-banner">
          Must include at least one number, one uppercase letter, and one lowercase letter
        </div>
        <input id="password" className="rl-form-control" type="password" />
      </fieldset>
      <button className="rl-btn rl-btn-lg rl-btn-primary" type="submit">
        Create
      </button>
    </form>
  </div>
);
