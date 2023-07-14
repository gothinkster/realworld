import { User } from '../models/user.model';
import {
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

import { getCurrentUser } from '../services/auth.service';
import { getToken } from '../utils/storage.util';

export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType>(null as unknown as AuthContextType);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    (async () => {
      const response = getToken() ? await getCurrentUser() : null;
      setUser(response);
      setIsFetched(true);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>{isFetched && children}</AuthContext.Provider>
  );
}
