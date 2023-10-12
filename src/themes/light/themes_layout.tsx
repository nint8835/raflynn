import { BaseThemesLayout } from '@/themes/common/themes_layout';

export const ThemesLayout = BaseThemesLayout({
    unlockedThemeClasses: 'hover:bg-zinc-200',
    lockedThemeClasses: 'text-zinc-500',
    activeThemeClasses: 'border-2 border-emerald-600',
});
