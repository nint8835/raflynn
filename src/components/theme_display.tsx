import Themes from '@/themes';
import { useThemeStore } from '@/themes/state';

export default function ThemeDisplay() {
    const activeThemeName = useThemeStore((state) => state.activeTheme);
    const activeTheme = Themes[activeThemeName];

    return <activeTheme.ThemeDisplay />;
}
