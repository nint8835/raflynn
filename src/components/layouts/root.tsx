import { Outlet } from 'react-router-dom';
import Themes from '@/themes';
import { useThemeStore } from '@/themes/state';

export default function RootLayout() {
    const activeThemeName = useThemeStore((state) => state.activeTheme);
    const activeTheme = Themes[activeThemeName];

    return (
        <activeTheme.RootLayout>
            <Outlet />
        </activeTheme.RootLayout>
    );
}
