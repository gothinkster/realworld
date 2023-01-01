export default {
  title: 'Pages/Article Form',
};

export const ArticleForm = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rl-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rl-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rl-link" href="">
            <img className="rl-avatar" src="avatar.png" alt="user avatar image" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rl-main">
      <h1 className="rl-page-title">Create new article</h1>
      <form>
        <fieldset className="rl-form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" className="rl-form-control" autoFocus />
        </fieldset>
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
        <fieldset className="rl-form-group">
          <label htmlFor="description">Description</label>
          <input id="description" type="text" className="rl-form-control" />
        </fieldset>
        <fieldset className="rl-form-group">
          <label htmlFor="body">Article content</label>
          <textarea id="body" className="rl-form-control" rows={8}></textarea>
        </fieldset>
        <fieldset className="rl-form-group">
          <label htmlFor="tags">Tags</label>
          <input id="tags" type="text" className="rl-form-control" />
          <div className="tag-list"></div>
        </fieldset>
        <button className="rl-btn-primary" type="submit">
          Publish
        </button>
      </form>
    </main>
  </>
);
