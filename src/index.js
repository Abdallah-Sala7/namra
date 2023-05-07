import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootLayout from './pages/RootLayout';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    children:[
      {index:true, element: <Home />},
      {path:'matches', element: <Matches />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
