export const inputFieldSourceDocs = () => ({
  docs: {
    source: {
      dark: true,
      code: '<a href="" class="rl-tag">#web</a>',
      language: 'html',
    },
  },
});

const inputFieldCode = ({hint, error}: {hint: boolean; error: boolean}) => `
  <fieldset className="rl-form-group">
    <label>Password</label>
    ${hint ? <div className="hint-banner">
      Must include at least one number, one uppercase letter, and one lowercase letter
    </div> : ''}
    <input type="password" autoComplete="off" class="rl-form-control" />
    ${error ? <div className="error-banner">The password doesn't match the requirements</div> : ''}
  </fieldset>
`
