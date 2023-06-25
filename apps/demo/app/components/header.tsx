'use client';

import { useContext } from 'react';
import { AuthContext } from '../auth/auth.context';
import Link from 'next/link';

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="/">
              Home
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" href="">
                {' '}
                <i className="ion-compose"></i>&nbsp;New Article{' '}
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" href="/settings">
                {' '}
                <i className="ion-gear-a"></i>&nbsp;Settings{' '}
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Sign in
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" href="/register">
                Sign up
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" href="/profile">
                <img src={user.image} className="user-pic" alt={user.username} />
                {user.username}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
