import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import {Header} from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <App/>, //přepsat na <ErrorPage /> až bude hotová
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


createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
