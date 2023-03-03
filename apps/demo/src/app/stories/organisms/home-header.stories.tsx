export default {
  title: 'Organisms/Home Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const HomeHeader = () => (
  <section className="rw-home-header">
    <img className="rl-avatar-xxl rw-home-header__cover" src="avatar.png" alt="user avatar" />
  </section>
);
