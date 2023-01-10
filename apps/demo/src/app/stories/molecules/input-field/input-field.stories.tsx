export default {
  title: 'Molecules/Input Field',
};

export const InputFieldDefault = () => (
  <fieldset className="rl-form-group">
    <label>Password</label>
    <input type="password" autoComplete="off" className="rl-form-control" />
  </fieldset>
);
InputFieldDefault.storyName = 'input field';

export const InputFieldHint = () => (
  <fieldset className="rl-form-group">
    <label>Password</label>
    <div className="hint-banner">
      Must include at least one number, one uppercase letter, and one lowercase letter
    </div>
    <input type="password" autoComplete="off" className="rl-form-control" />
  </fieldset>
);
InputFieldHint.storyName = 'input field (hint)';

export const InputFieldError = () => (
  <fieldset className="rl-form-group">
    <label>Password</label>
    <input type="password" autoComplete="off" className="rl-form-control" />
    <div className="error-banner">The password doesn't match the requirements</div>
  </fieldset>
);
InputFieldError.storyName = 'input field (error)';

export const InputFieldHintError = () => (
  <fieldset className="rl-form-group">
    <label>Password</label>
    <div className="hint-banner">
      Must include at least one number, one uppercase letter, and one lowercase letter
    </div>
    <input type="password" autoComplete="off" className="rl-form-control" />
    <div className="error-banner">The password doesn't match the requirements</div>
  </fieldset>
);
InputFieldHintError.storyName = 'input field (hint & error)';
