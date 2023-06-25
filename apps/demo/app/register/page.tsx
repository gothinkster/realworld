'use client';

import { register } from '../services/auth.service';
import React, { useContext, useState } from 'react';
import { RegisterCredentials } from '../models/register-credentials.model';
import Link from 'next/link';
import { AuthContext } from '../auth/auth.context';
import AuthErrors from '../components/auth-errors';
import Field from '../components/field';
import { useRouter } from 'next/navigation';

export default async function Page() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      localStorage.setItem('token', data.user.token);
      router.push('/');
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
            </p>

            <AuthErrors errors={errors} />

            <form onSubmit={submit}>
              <Field name={'username'} type={'text'} placeholder={'Your Name'} />
              <Field name={'email'} type={'text'} placeholder={'Email'} />
              <Field name={'password'} type={'password'} placeholder={'Password'} />
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
