export default {
  title: 'Templates/Article Form',
};

export const ArticleForm = () => (
  <form>
    <fieldset className="rl-form-group">
      <label htmlFor="title">Title</label>
      <input id="title" type="text" className="rl-form-control" />
    </fieldset>
    <fieldset className="rl-form-group--file">
      <label>Choose a cover image</label>
      <input type="file" className="rl-input-file" />
      <button type="button" className="rl-btn rl-btn-secondary">
        Upload
      </button>
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
    <button className="rl-btn rl-btn-lg rl-btn-secondary" type="submit">
      Publish
    </button>
  </form>
);
