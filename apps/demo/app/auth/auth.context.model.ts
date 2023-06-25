import { User } from '../models/user.model';
import { Dispatch, SetStateAction } from 'react';

export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
