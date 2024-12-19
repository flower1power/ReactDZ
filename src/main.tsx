import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { UserContextProvider } from './context/users.context.js';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './Layout/Layout.tsx';
import LoginPage from './page/Login/LoginPage.tsx';
import { ErrorPage } from './page/ErrorPage/ErrorPage.tsx';
import { RequireAuth } from './utils/RequireAuth.tsx';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

const Film = lazy(() => import('./page/Film/Film'));
const App = lazy(() => import('./App.tsx'));
const Favorites = lazy(() => import('./page/Favorites/Favorites'));

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: (
          <RequireAuth>
            <Suspense fallback={<>Загрузка...</>}>
              <App />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: '/favorites',
        element: (
          <RequireAuth>
            <Favorites />
          </RequireAuth>
        ),
      },
      {
        path: '/profile',
        element: (
          <RequireAuth>
            <Favorites />
          </RequireAuth>
        ),
      },
      {
        path: '/product/:tt',
        element: (
          <RequireAuth>
            <Film />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <UserContextProvider>
          <RouterProvider router={route}></RouterProvider>
        </UserContextProvider>
      </Provider>
    </StrictMode>,
  );
} else {
  console.error('Root элемент не найден');
}
