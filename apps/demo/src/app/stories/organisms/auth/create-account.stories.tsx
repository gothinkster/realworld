export default {
  title: 'Organisms/Auth/Create Account',
};

export const CreateAccount = () => (
  <dialog id="create-account-dialog" className="auth-page">
    <h1 className="rw-page-title auth-title">Create account</h1>

    <form method="dialog" className="auth-form">
      <fieldset className="rw-form-group">
        <label htmlFor="name">Name</label>
        <input id="name" className="rw-form-control" type="text" autoComplete="off" />
      </fieldset>
      <fieldset className="rw-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rw-form-control" type="text" autoComplete="off" />
      </fieldset>
      <fieldset className="rw-form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="rw-form-control"
          type="password"
          autoComplete="new-password"
        />
        <div className="hint-banner">
          Must include at least 8 characters, one number, and one uppercase letter.
        </div>
      </fieldset>
      <button className="rw-btn-primary" type="submit">
        Create
      </button>
    </form>

    <a className="rw-link-underlined" href="">
      Have an account?
    </a>
  </dialog>
);
