export default {
  title: 'Molecules/Input Avatar',
};

export const InputAvatar = () => (
  <>
    <input type="file" className="rl-input-file" />
    <button className="rl-form-group--avatar foo">
      <img className="rl-avatar rl-avatar-xxl foot" src="avatar.png" alt="user avatar image" />
    </button>
  </>
);
