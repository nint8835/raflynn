import { Outlet } from 'react-router-dom';

import { useActiveTheme } from '@/themes/state';

export default function RootLayout() {
    const activeTheme = useActiveTheme();

    return (
        <activeTheme.RootLayout>
            <Outlet />
        </activeTheme.RootLayout>
    );
}
