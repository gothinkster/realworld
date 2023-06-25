'use client';

import { useContext } from 'react';
import { AuthContext } from '../../auth/auth.context';
import Link from 'next/link';

export default function CommentList() {
  const { user } = useContext(AuthContext);

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
        <form className="card comment-form">
          <div className="card-block">
            <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
          </div>
          <div className="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            <button className="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              Jacob Schmidt
            </a>
            <span className="date-posted">Dec 29th</span>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              Jacob Schmidt
            </a>
            <span className="date-posted">Dec 29th</span>
            <span className="mod-options">
              <i className="ion-edit"></i>
              <i className="ion-trash-a"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
