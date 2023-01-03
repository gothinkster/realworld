import coverImage from '../assets/end.png';

export default {
  title: 'Molecules/Input File',
};

export const InputFile = () => (
  <>
    <fieldset className="rl-file-form-group">
      <label>Cover image</label>
      <div className="rl-file-form-group__input">
        <div>Drag and drop the file here</div>
        <div>- OR -</div>
        <button type="button" className="rl-btn-primary">
          Browse files
        </button>
      </div>
      <input type="file" className="rl-input-file" />
    </fieldset>

    <fieldset className="rl-file-form-group">
      <label>Cover image</label>
      <div className="rl-file-form-group__input">
        <img className="rl-file-form-group__preview" src={coverImage} alt="" />
        <div className="rl-file-form-group__button-container">
          <button type="button" className="rl-btn-primary">
            Browse files
          </button>
          <button type="button" className="rl-btn-warn">
            Remove
          </button>
        </div>
      </div>
      <input type="file" className="rl-input-file" />
    </fieldset>
  </>
);
