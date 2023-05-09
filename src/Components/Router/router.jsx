import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Home';
import AddChoco from '../AddChoco';
import UpdateChoco from '../UpdateChoco';
import App from '../../App';

const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/chocolate')
        },
        {
            path: '/addChoco',
            element: <AddChoco></AddChoco>
        },
        {
            path: '/updateChoco',
            element: <UpdateChoco></UpdateChoco>
        }
      ]
    },
  ]);
  
export default router;