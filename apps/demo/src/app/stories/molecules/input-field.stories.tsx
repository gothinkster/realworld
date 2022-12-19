export default {
  title: 'Molecules/Input Field',
};

export const InputField = () => (
  <>
    <fieldset className="rl-form-group">
      <label>Email</label>
      <input type="text" className="rl-form-control" />
      <div className="error-banner">That email is already taken</div>
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Tags</label>
      <input type="text" className="rl-form-control" />
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Article title</label>
      <input type="text" className="rl-form-control" />
      <div className="error-banner">The title is required</div>
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Password</label>
      <div className="hint-banner">
        Must include at least one number, one uppercase letter, and one lowercase letter
      </div>
      <input type="password" autoComplete="off" className="rl-form-control" />
      <div className="error-banner">The password doesn't match the requirements</div>
    </fieldset>
  </>
);
