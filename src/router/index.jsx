import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Web from '@/pages/Web.jsx';
import App from '@/App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'web',
        element: <Web />,
      },
    ],
  },
]);

export default router;