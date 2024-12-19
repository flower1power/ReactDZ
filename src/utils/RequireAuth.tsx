import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../context/users.context';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { users } = useContext(UserContext);

  const loggedInUser = users.some((user) => user.isLogined);

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
