import { useNavigate, useLoaderData } from 'react-router-dom';
import React, { useState } from 'react';
import { createArticle, getArticle, updateArticle } from '../../services/article.service';
import { Article } from '../../models/article.model';

export async function loader(slug: string): Promise<{ data: Article }> {
  const article = await getArticle(slug);

  return {
    data: article,
  };
}

export default function EditorPage() {
  const { data } = useLoaderData() as { data: Article };
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState<string>(data.title);
  const [description, setDescription] = useState<string>(data.description);
  const [body, setBody] = useState<string>(data.body);
  const [tags, setTags] = useState<string[]>(data.tagList);
  const navigate = useNavigate();

  function addTag(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      const tag = (event.target as HTMLInputElement).value;
      (event.target as HTMLInputElement).value = '';
      setTags(tags => [...tags, tag]);
    }
  }

  function removeTag(tag: string): void {
    setTags(tags => tags.filter(t => t !== tag));
  }

  async function submit(): Promise<void> {
    setIsLoading(true);

    const credentials = { title, description, body, tagList: tags };

    const promise = data.slug
      ? () => updateArticle(data.slug, credentials)
      : () => createArticle(credentials);

    const response = await promise();
    setIsLoading(false);

    if (response.ok) {
      const { article } = await response.json();
      navigate(`/article/${article.slug}`);
    }
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={e => e.preventDefault()}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    name="articleTitle"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    name="body"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    name="tags"
                    className="form-control"
                    placeholder="Enter tags"
                    onKeyUp={addTag}
                  />
                  <div className="tag-list">
                    {tags.map(tag => (
                      <span className="tag-default tag-pill" key={tag}>
                        <i className="ion-close-round" onClick={() => removeTag(tag)}></i>
                        {tag}
                      </span>
                    ))}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={submit}
                  disabled={isLoading}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
