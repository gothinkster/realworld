export default {
  title: 'Organisms/Auth/Login',
};

export const Login = ({ action }: { action: string }) => (
  <div className="auth-page">
    <h1 className="auth-title">Log in</h1>
    <a className="rl-link-underlined" href="">
      Need an account?
    </a>

    <form className="auth-form">
      <fieldset className="rl-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rl-form-control" type="text" autoComplete="email" autoFocus />
      </fieldset>
      <fieldset className="rl-form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="rl-form-control"
          type="password"
          autoComplete="current-password"
        />
      </fieldset>
      <button className="rl-btn-primary" type="submit">
        Log in
      </button>
    </form>
  </div>
);
