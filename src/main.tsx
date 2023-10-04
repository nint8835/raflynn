import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterError from './routes/error';
import Root from './routes/root';

const router = createBrowserRouter([
    {
        path: '/~raflynn',
        element: <Root />,
        errorElement: <RouterError />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
