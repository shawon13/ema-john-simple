import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Layout/Home.jsx'
import Shop from './components/Header/Shop/Shop.jsx'
import Order from './components/Order/Order.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'
import Error from './components/Error/Error.jsx'
import loaderProductsCart from './Loader/LoaderProductsCart.js'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Shop />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/order',
          element: <Order />,
          loader: loaderProductsCart,
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        {
          path: '/login',
          element: <Login />
        },
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
