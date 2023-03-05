export default {
  title: 'Organisms/Article Form',
};

export const ArticleForm = () => (
  <form className="rw-article-form">
    <fieldset className="rw-form-group">
      <label htmlFor="title">Title</label>
      <input id="title" type="text" className="rw-form-control" />
    </fieldset>
    <fieldset className="rw-file-form-group">
      <label>Cover image</label>
      <div className="rw-file-form-group__input">
        <div>Drag and drop the file here</div>
        <div>- OR -</div>
        <button type="button" className="rw-btn-primary">
          Browse files
        </button>
      </div>
      <input type="file" className="rw-input-file" />
    </fieldset>
    <fieldset className="rw-form-group">
      <label htmlFor="description">Description</label>
      <input id="description" type="text" className="rw-form-control" />
    </fieldset>
    <fieldset className="rw-form-group">
      <label htmlFor="body">Article content</label>
      <textarea id="body" className="rw-form-control" rows={8}></textarea>
    </fieldset>
    <fieldset className="rw-form-group">
      <label htmlFor="tags">Tags</label>
      <input id="tags" type="text" className="rw-form-control" />
      <div className="tag-list"></div>
    </fieldset>
    <button className="rw-btn-primary" type="submit">
      Publish
    </button>
  </form>
);
