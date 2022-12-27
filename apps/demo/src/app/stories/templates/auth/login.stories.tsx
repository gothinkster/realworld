import { within } from '@storybook/testing-library';

export default {
  title: 'Templates/Auth/Login',
};

export const Login = () => (
  <dialog id="login-dialog" className="auth-page">
    <h1 className="auth-title">Log in</h1>

    <form className="auth-form">
      <fieldset className="rl-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rl-form-control" type="text" autoComplete="email" />
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

    <a className="rl-link-underlined" href="">
      Need an account?
    </a>
  </dialog>
);

Login.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const dialog = canvas.getByRole('dialog') as HTMLDialogElement;
  dialog.showModal();
};
