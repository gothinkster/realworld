'use client';

import React, { useContext } from 'react';
import { AuthContext } from '../../auth/auth.context';
import Link from 'next/link';
import { useComments } from '../hooks/comments.hook';
import { Comment } from '../../models/comment.model';
import { createComment, deleteComment } from '../services/comment.service';
import { dateFormatter } from '../../utils/date.utils';

interface CommentListProps {
  slug: string;
}

export default function CommentList({ slug }: CommentListProps) {
  const { user } = useContext(AuthContext);
  const { comments, mutate } = useComments(slug);

  async function create(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const comment = (event.target as HTMLFormElement).comment.value;
    const createdComment = await createComment(slug, comment);
    mutate([...comments, createdComment], { populateCache: false });
  }

  async function deleteC(id: number): Promise<void> {
    await deleteComment(slug, id);
    mutate([...comments.filter((comment: Comment) => comment.id !== id)], { populateCache: false });
  }

  if (!user) {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <p>
            <Link href="/login">Sign in</Link>
            &nbsp; or &nbsp;
            <Link href="/register">Sign up</Link>
            &nbsp; to add comments on this article.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form" onSubmit={create}>
          <div className="card-block">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
            ></textarea>
          </div>
          <div className="card-footer">
            <img src={user.image} className="comment-author-img" alt={`${user.username} avatar`} />
            <button type="submit" className="btn btn-sm btn-primary">
              Post Comment
            </button>
          </div>
        </form>

        {comments &&
          comments.map((comment: Comment, key: number) => (
            <div key={key} className="card">
              <div className="card-block">
                <p className="card-text">{comment.body}</p>
              </div>
              <div className="card-footer">
                <Link href={'/profile/' + comment.author.username} className="comment-author">
                  <img
                    src={comment.author.image}
                    className="comment-author-img"
                    alt={`${comment.author.username} avatar`}
                  />
                </Link>
                &nbsp;
                <Link href={'/profile/' + comment.author.username} className="comment-author">
                  {comment.author.username}
                </Link>
                <span className="date-posted">{dateFormatter(comment.createdAt)}</span>
                <span className="mod-options">
                  <i className="ion-trash-a" onClick={() => deleteC(comment.id)}></i>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
