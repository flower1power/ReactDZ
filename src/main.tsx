import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './main.css';
import { UserContextProvider } from './context/users.context.js';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </StrictMode>,
  );
} else {
  console.error('Root элемент не найден');
}
