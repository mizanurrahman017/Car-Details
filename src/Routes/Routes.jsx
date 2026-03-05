import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import Root from '../Pages/Root/Root';
import Cars from '../Pages/Root/Cars/Cars';
import Brands from '../Pages/Root/Brands/Brands';
import Compare from '../Pages/Root/Compare/Compare';
import Contact from '../Pages/Root/Contact/Contact';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
            path:"cars",
            element:<Cars></Cars>
        },
        {
          path:"brands",
          element:<Brands></Brands>
        },
        {
          path:"compare",
          element:<Compare></Compare>
        },
        {
          path:"contact",
          element:<Contact></Contact>
        }
    ]
  },
]);
