'use client';

import { createContext, useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';
import { AuthContextType } from './auth.context.model';
import { User } from '../models/user.model';
import { getCurrentUser } from '../services/auth.service';

export const AuthContext = createContext<AuthContextType>(null as unknown as AuthContextType);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log(token);

    const setCurrentUser = async () => {
      const response = await getCurrentUser();
      const data = await response.json();
      setUser(data.user);
    };

    if (token) {
      setCurrentUser();
    }
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
