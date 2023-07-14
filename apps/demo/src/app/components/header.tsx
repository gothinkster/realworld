import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/auth.context';
import { useContext } from 'react';

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/editor">
                {' '}
                <i className="ion-compose"></i>&nbsp;New Article{' '}
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                {' '}
                <i className="ion-gear-a"></i>&nbsp;Settings{' '}
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Sign in
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to={'/profile/' + user.username}>
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
