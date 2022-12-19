export default {
  title: 'Molecules/Input File',
};

export const InputFile = () => (
  <>
    <fieldset className="rl-form-group--file">
      <label>Choose a cover image</label>
      <input type="file" className="rl-input-file" />
      <button type="button" className="rl-btn rl-btn-secondary">
        Upload
      </button>
    </fieldset>
  </>
);
