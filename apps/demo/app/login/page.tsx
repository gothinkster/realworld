'use client';

import React, { useContext, useState } from 'react';
import { LoginCredentials } from '../models/login-credentials.model';
import Link from 'next/link';
import { login } from '../services/auth.service';
import { AuthContext } from '../auth/auth.context';
import Field from '../components/field';
import AuthErrors from '../components/auth-errors';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const submit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setErrors({});

    const credentials: LoginCredentials = {
      email: (event.target as HTMLFormElement).email.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    const response = await login(credentials);
    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors);
    } else {
      setUser(data.user);
      localStorage.setItem('token', data.user.token);
      router.push('/');
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <AuthErrors errors={errors} />

            <form onSubmit={submit}>
              <Field name={'email'} type={'text'} placeholder={'Email'} />
              <Field name={'password'} type={'password'} placeholder={'Password'} />
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
