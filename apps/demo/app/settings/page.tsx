'use client';

import React, { useContext } from 'react';
import { AuthContext } from '../auth/auth.context';
import { updateUser } from '../services/auth.service';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  async function submit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const credentials = {
      image: (event.target as HTMLFormElement).image.value,
      username: (event.target as HTMLFormElement).username.value,
      bio: (event.target as HTMLFormElement).bio.value,
      email: (event.target as HTMLFormElement).email.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    const response = await updateUser(credentials);
    const data = await response.json();

    if (response.ok) {
      setUser(data.user);
    }
  }

  function logout(): void {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/');
  }

  if (!user) {
    router.push('/login');
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={submit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    value={user?.image}
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    value={user?.username}
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    value={user?.bio || ''}
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
              </fieldset>
            </form>

            <hr />

            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
