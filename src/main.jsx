import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cardProductLoader from './Card-product/CardProductLoder';
import Checkout from './component/Chexkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children: [
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        loader: cardProductLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
