import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorPage } from './pages/ErrorPage';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{' '}
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />, //přepsat na <HomePage /> až bude hotová
      },
      {
        path: 'about',
        element: <App />, //přepsat na <AboutPage /> až bude hotová
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
