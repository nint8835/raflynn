import { BaseThemesLayout } from '@/themes/common/themes_layout';

export const ThemesLayout = BaseThemesLayout({
    unlockedThemeClasses: 'hover:bg-zinc-950',
    lockedThemeClasses: 'text-zinc-500',
    activeThemeClasses: 'border-emerald-800 border-2',
});
