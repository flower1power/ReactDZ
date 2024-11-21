import { MouseEvent } from 'react';

export interface IUser {
  name: string;
  isLogined: boolean;
}

export interface IUserContext {
  users: IUser[];
  loginUser: (newUser: IUser) => void;
  logoutUser: (e: MouseEvent) => void;
}
