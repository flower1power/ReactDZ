import { createContext, FC } from 'react';
import { IUserContext } from './type';
import { IUserContextProviderProps } from './users.context.props';
import { useSelector } from 'react-redux';
import { TRootState } from '../store/store';

const defaultUserContext: IUserContext = {
  users: [],
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

export const UserContextProvider: FC<IUserContextProviderProps> = ({
  children,
}) => {
  const users = useSelector((state: TRootState) => state.users.users);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
