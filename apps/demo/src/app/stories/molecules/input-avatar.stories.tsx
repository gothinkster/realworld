export default {
  title: 'Molecules/Input Avatar',
};

export const InputAvatar = () => (
  <fieldset className="rw-file-form-group">
    <label>Avatar</label>
    <div className="rw-file-form-group__input-avatar">
      <img className="rw-avatar-xl" src="avatar.png" alt="user avatar" />
      <button type="button" className="rw-btn-primary">
        Change
      </button>
      <button type="button" className="rw-btn-warn">
        Remove
      </button>
    </div>
    <input type="file" className="rw-input-file" />
  </fieldset>
);
