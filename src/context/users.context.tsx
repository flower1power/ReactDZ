import { createContext, FC, MouseEvent } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import { IUser, IUserContext } from './type';
import { IUserContextProviderProps } from './users.context.props';

const defaultUserContext: IUserContext = {
  users: [],
  loginUser: () => {},
  logoutUser: () => {},
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

export const UserContextProvider: FC<IUserContextProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useLocalStorage<IUser[]>('users', []);

  const loginUser = (newUser: IUser) => {
    setUsers((data) => {
      const updatedUsers = data.map((user) =>
        user.name === newUser.name
          ? { ...user, isLogined: true }
          : { ...user, isLogined: false },
      );
      if (!updatedUsers.some((user) => user.name === newUser.name)) {
        updatedUsers.push({ ...newUser, isLogined: true });
      }
      return updatedUsers;
    });
  };

  const logoutUser = (e: MouseEvent) => {
    e.preventDefault();
    setUsers((data) => data.map((user) => ({ ...user, isLogined: false })));
  };

  return (
    <UserContext.Provider value={{ users, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
