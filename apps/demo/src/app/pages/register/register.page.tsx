import { register } from '../../services/auth.service';
import React, { useContext, useState } from 'react';
import { RegisterCredentials } from '../../models/register-credentials.model';
import { AuthContext } from '../../auth/auth.context';
import AuthErrors from '../../components/auth-errors';
import Field from '../../components/field';
import { Link, useNavigate } from 'react-router-dom';
import { setToken } from '../../utils/storage.util';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();

    const credentials: RegisterCredentials = {
      username: (event.target as HTMLFormElement).username.value,
      email: (event.target as HTMLFormElement).email.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    const response = await register(credentials);
    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors);
    } else {
      setUser(data.user);
      setToken(data.user.token);
      navigate('/');
    }

    setIsLoading(false);
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <AuthErrors errors={errors} />

            <form onSubmit={submit}>
              <Field name={'username'} type={'text'} placeholder={'Username'} />
              <Field name={'email'} type={'text'} placeholder={'Email'} />
              <Field name={'password'} type={'password'} placeholder={'Password'} />
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                disabled={isLoading}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
