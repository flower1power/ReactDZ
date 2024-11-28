import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './main.css';
import { UserContextProvider } from './context/users.context.js';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './Layout/Layout.tsx';
import LoginPage from './page/Login/LoginPage.tsx';
import { Favorites } from './page/Favorites/Favorites.tsx';
import { Error } from './page/Error/Error.tsx';
import { Film } from './page/Film/Film.tsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      { path: '/profile', element: <Favorites /> },
      {
        path: '/product/:id',
        element: <Film />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UserContextProvider>
        <RouterProvider router={route}></RouterProvider>
      </UserContextProvider>
    </StrictMode>,
  );
} else {
  console.error('Root элемент не найден');
}
