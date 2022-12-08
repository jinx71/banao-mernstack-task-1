import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Pages/Home/Home';
import NotFound from '../Component/Pages/NotFound/NotFound';
import Main from '../Layout/Main';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
        ]
    },

    {
        path: "*",
        element: <NotFound></NotFound>
    },
])