export default {
  title: 'Molecules/Input Field',
};

export const InputFieldDefault = {
  render: () => (
    <fieldset className="rw-form-group">
      <label>Password</label>
      <input type="password" autoComplete="off" className="rw-form-control" />
    </fieldset>
  ),

  name: 'input field',
};

export const InputFieldHint = {
  render: () => (
    <fieldset className="rw-form-group">
      <label>Password</label>
      <div className="hint-banner">
        Must include at least one number, one uppercase letter, and one lowercase letter
      </div>
      <input type="password" autoComplete="off" className="rw-form-control" />
    </fieldset>
  ),

  name: 'input field (hint)',
};

export const InputFieldError = {
  render: () => (
    <fieldset className="rw-form-group">
      <label>Password</label>
      <input type="password" autoComplete="off" className="rw-form-control" />
      <div className="error-banner">The password doesn't match the requirements</div>
    </fieldset>
  ),

  name: 'input field (error)',
};

export const InputFieldHintError = {
  render: () => (
    <fieldset className="rw-form-group">
      <label>Password</label>
      <div className="hint-banner">
        Must include at least one number, one uppercase letter, and one lowercase letter
      </div>
      <input type="password" autoComplete="off" className="rw-form-control" />
      <div className="error-banner">The password doesn't match the requirements</div>
    </fieldset>
  ),

  name: 'input field (hint & error)',
};
