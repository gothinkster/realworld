export default {
  title: 'Molecules/Input Field',
  parameters: {
    backgrounds: {
      default: 'realworld',
    },
  },
};

export const InputField = () => (
  <>
    <fieldset className="rl-form-group">
      <label>Email</label>
      <input type="text" className="rl-form-control" />
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Tags</label>
      <input type="text" className="rl-form-control" />
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Article title</label>
      <input type="text" className="rl-form-control" />
    </fieldset>

    <fieldset className="rl-form-group">
      <label>Password</label>
      <input type="password" autoComplete="off" className="rl-form-control" />
    </fieldset>
  </>
);
