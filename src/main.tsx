import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterError from './routes/error';
import Placeholder from './routes/placeholder';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Placeholder />,
        errorElement: <RouterError />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
