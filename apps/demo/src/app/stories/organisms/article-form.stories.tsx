export default {
  title: 'Organisms/Article Form',
};

export const ArticleForm = () => (
  <form>
    <fieldset className="rl-form-group">
      <label htmlFor="title">Title</label>
      <input id="title" type="text" className="rl-form-control" />
    </fieldset>
    <fieldset className="rl-file-form-group">
      <label>Cover image</label>
      <div className="rl-file-form-group__input">
        <div>Drag and drop the file here</div>
        <div>- OR -</div>
        <button type="button" className="rl-btn-secondary">
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
    <button className="rl-btn-secondary" type="submit">
      Publish
    </button>
  </form>
);
