import { within } from '@storybook/testing-library';

export default {
  title: 'Templates/Auth/Create Account',
};

export const CreateAccount = () => (
  <dialog id="create-account-dialog" className="auth-page">
    <h1 className="rl-page-title auth-title">Create account</h1>

    <form method="dialog" className="auth-form">
      <fieldset className="rl-form-group">
        <label htmlFor="name">Name</label>
        <input id="name" className="rl-form-control" type="text" autoComplete="off" />
      </fieldset>
      <fieldset className="rl-form-group">
        <label htmlFor="email">Email</label>
        <input id="email" className="rl-form-control" type="text" autoComplete="off" />
      </fieldset>
      <fieldset className="rl-form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="rl-form-control"
          type="password"
          autoComplete="new-password"
        />
        <div className="hint-banner">
          Must include at least 8 characters, one number, and one uppercase letter.
        </div>
      </fieldset>
      <button className="rl-btn-primary" type="submit">
        Create
      </button>
    </form>

    <a className="rl-link-underlined" href="">
      Have an account?
    </a>
  </dialog>
);

CreateAccount.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const dialog = canvas.getByRole('dialog') as HTMLDialogElement;
  dialog.showModal();
};
