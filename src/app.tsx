import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { usePrefersColorScheme } from 'use-prefers-color-scheme';

import RootLayout from '@/components/layouts/root';
import RouterError from '@/routes/error';
import Home from '@/routes/home';
import { Themes } from '@/themes/definition';
import { useThemeStore } from '@/themes/state';

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

    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            return;
        }
        if (colourScheme === 'dark') {
            setActiveTheme(Themes.Dark);
        } else if (colourScheme === 'light') {
            setActiveTheme(Themes.Light);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colourScheme, setActiveTheme]);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
        }
    }, [isFirstRender]);

    return <RouterProvider router={router} />;
}
