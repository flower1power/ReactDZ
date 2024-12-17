import { ReactNode } from 'react';
import { Navigate } from 'react-router';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = localStorage.getItem('users');

  if (!jwt) {
    return <Navigate to="/login" replace />;
  } else {
    const filter: { name: string; isLogined: boolean }[] = JSON.parse(jwt).filter(
      (user: { name: string; isLogined: boolean }) => user.isLogined,
    );

    if (filter.length === 0) {
      return <Navigate to="/login" replace />;
    }
  }

  return <>{children}</>;
};
