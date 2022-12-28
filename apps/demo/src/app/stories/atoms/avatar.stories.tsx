export default {
  title: 'Atoms/Avatar',
};

export const Avatar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <img className="rl-avatar-sm" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar-lg" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar-xl" src="avatar.png" alt="user avatar image" />
    <img className="rl-avatar-xxl" src="avatar.png" alt="user avatar image" />
  </div>
);
