import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import Statistics from './Components/Statistics/Statistics';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import ListedGadgets from './Components/ListedGadgets/ListedGadgets';
import CartedGadget from './Components/CartedGadget/CartedGadget';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/listedgadgets",
        element: <ListedGadgets></ListedGadgets>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "listedgadgets", 
            element: <ListedGadgets />,
            loader: () => fetch('/data.json')
          },
          {
            path: "cartedgadget", 
            element: <CartedGadget />,
            loader: () => fetch('/data.json')
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
