export default {
  title: 'Atoms/Avatar',
};

export const Avatar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <img className="rl-avatar rl-avatar-sm" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar rl-avatar-lg" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar rl-avatar-xl" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar rl-avatar-xxl" src="avatar.png" alt="user avatar image" />
  </div>
);
