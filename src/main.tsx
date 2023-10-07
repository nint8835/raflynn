import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/components/layouts/root';
import RouterError from '@/routes/error';
import Home from '@/routes/home';

const router = createBrowserRouter([
    {
        path: '/~raflynn',
        element: <RootLayout />,
        errorElement: <RouterError />,
        children: [
            {
                element: <Home />,
                index: true,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
