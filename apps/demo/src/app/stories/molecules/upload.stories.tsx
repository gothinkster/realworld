import coverImage from '../assets/end.png';

export default {
  title: 'Molecules/Input File',
};

export const InputFile = () => (
  <>
    <fieldset className="rw-file-form-group">
      <label>Cover image</label>
      <div className="rw-file-form-group__input">
        <div>Drag and drop the file here</div>
        <div>- OR -</div>
        <button type="button" className="rw-btn-default">
          Browse files
        </button>
      </div>
      <input type="file" className="rw-input-file" />
    </fieldset>

    <fieldset className="rw-file-form-group">
      <label>Cover image</label>
      <div className="rw-file-form-group__input">
        <img className="rw-file-form-group__preview" src={coverImage} alt="" />
        <div className="rw-file-form-group__button-container">
          <button type="button" className="rw-btn-default">
            Browse files
          </button>
          <button type="button" className="rw-btn-warn">
            Remove
          </button>
        </div>
      </div>
      <input type="file" className="rw-input-file" />
    </fieldset>
  </>
);
