import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './components/Pages/MainPage/MainPage';
import { ProductsList } from './components/Pages/ProductsList/ProductsList';
import { Registration } from './components/Pages/Registration/Registration';
import { Authentication } from './components/Pages/Authentication/Authentication';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: '/signup',
        element: <Registration />,
      },
      {
        path: '/signin',
        element: <Authentication />,
      },
    ]
  }
], { basename: "/DogFoodReactApp" })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
