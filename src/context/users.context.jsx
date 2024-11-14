import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';

export const UserContext = createContext({
  users: [],
  loginUser: () => {},
  logoutUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage('users', []);

  const loginUser = (newUser) => {
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

  const logoutUser = () => {
    setUsers((data) => data.map((user) => ({ ...user, isLogined: false })));
  };

  return (
    <UserContext.Provider value={{ users, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
