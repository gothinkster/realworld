export default {
  title: 'Organisms/Profile Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ProfileHeader = () => (
  <>
    <section className="rw-profile-header">
      <div className="rw-profile-header__bio">
        <a className="rw-article-author__container" href="">
          <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
          <div className="rw-article-author__content">
            <span>Gerome Grignon</span>
            <span className="rw-date">joined on December 9, 2022</span>
          </div>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur blanditiis,
          cumque, debitis dicta error facere, id in ipsum iste maiores minus nesciunt numquam
          perspiciatis quo quod ratione reiciendis rerum.
        </p>
      </div>
      <img
        className="rw-avatar-xxl rw-profile-header__avatar"
        src="avatar.jpeg"
        alt="user avatar"
      />
    </section>
    <aside className="rw-profile-header__aside">
      <ul className="rw-profile-header__stat-list">
        <li>3 articles</li>
        <li>15k Followers</li>
        <li>39k likes</li>
      </ul>
      <button className="rw-btn-primary">Follow me</button>
    </aside>
  </>
);
