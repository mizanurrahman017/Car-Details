import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import Root from '../Pages/Root/Root';
import Cars from '../Pages/Root/Cars/Cars';



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
        }
    ]
  },
]);
