export default {
  title: 'Organisms/Auth/Login',
};

export const Login = () => (
  <dialog id="login-dialog" className="auth-page">
    <h1 className="rw-page-title auth-title">Log in</h1>

    <form className="auth-form">
      <fieldset className="rw-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rw-form-control" type="text" autoComplete="email" />
      </fieldset>
      <fieldset className="rw-form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="rw-form-control"
          type="password"
          autoComplete="current-password"
        />
      </fieldset>
      <button className="rw-btn-primary" type="submit">
        Log in
      </button>
    </form>

    <a className="rw-link-underlined" href="">
      Need an account?
    </a>
  </dialog>
);
