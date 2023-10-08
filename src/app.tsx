import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { usePrefersColorScheme } from 'use-prefers-color-scheme';
import { useEffect } from 'react';

import RootLayout from '@/components/layouts/root';
import RouterError from '@/routes/error';
import Home from '@/routes/home';
import { useThemeStore } from '@/themes/state';
import { Themes } from '@/themes/definition';

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

export default function App() {
    const colourScheme = usePrefersColorScheme();
    const setActiveTheme = useThemeStore((state) => state.setActiveTheme);

    useEffect(() => {
        if (colourScheme === 'dark') {
            setActiveTheme(Themes.Dark);
        } else if (colourScheme === 'light') {
            setActiveTheme(Themes.Light);
        }
    }, [colourScheme, setActiveTheme]);

    return <RouterProvider router={router} />;
}
