export default {
  title: 'Pages/Auth/Create Account',
};

export const CreateAccount = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>
      <ul className="navbar-links">
        <li className="nav-item">
          <a className="rl-link" href="">
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create account
          </a>
        </li>
      </ul>
    </nav>

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
          <input id="password" className="rl-form-control" type="password" />
        </fieldset>
        <button className="rl-btn-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  </>
);
