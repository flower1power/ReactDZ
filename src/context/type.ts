import { MouseEvent } from 'react';
import { ISearchDescription } from '../inteface/search.interfase';

export interface IUser {
  name: string;
  isLogined: boolean;
  items: ISearchDescription[];
}

export interface IUserContext {
  users: IUser[];
}
