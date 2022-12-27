export default {
  title: 'Pages/Article Form',
  parameters: {
    backgrounds: {
      default: 'realworld',
    },
  },
};

export const ArticleForm = () => (
  <div className="container page">
    <div className="row">
      <div className="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" className="rl-form-control" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="description">Description</label>
              <input id="description" type="text" className="rl-form-control" />
            </fieldset>
            <fieldset className="rl-form-group">
              <label htmlFor="image">Cover image</label>
              <input id="image" type="text" className="rl-form-control" />
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
            <button className="rl-btn rl-btn-primary" type="submit">
              Publish
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);
