export default {
  title: 'Organisms/Profile Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ProfileHeader = () => (
  <>
    <section className="rw-profile-header">
      <hgroup className="rw-profile-header__bio">
        <h3 className="rw-profile-header__title">Gerome Grignon</h3>
        <span className="rw-date">joined on December 9, 2022</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur blanditiis,
          cumque, debitis dicta error facere, id in ipsum iste maiores minus nesciunt numquam
          perspiciatis quo quod ratione reiciendis rerum.
        </p>
      </hgroup>
      <img
        className="rw-avatar-xxl rw-profile-header__avatar"
        src="avatar.jpeg"
        alt="user avatar"
      />
    </section>
    <aside className="rw-profile-header__aside">
      <ul className="rw-profile-header__stat-list">
        <li>3 articles</li>
        <li>15 Followers</li>
        <li>390 likes</li>
      </ul>
      <button className="rw-btn-primary">Follow me</button>
    </aside>
  </>
);
