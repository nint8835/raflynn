import { useActiveTheme } from '@/themes/state';

export default function ThemeDisplay() {
    const activeTheme = useActiveTheme();

    return <activeTheme.ThemeDisplay />;
}
