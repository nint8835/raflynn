import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { type Theme, Themes } from '@/themes/definition';
import ThemeDefinitions from '@/themes';

export type SeenThemes = { [key in Themes]: boolean };

export interface ThemeState {
    activeTheme: Themes;
    seenThemes: SeenThemes;
    setActiveTheme: (theme: Themes) => void;
}

export const useThemeStore = create<ThemeState>()(
    devtools(
        persist(
            (set) => ({
                activeTheme: Themes.Dark,
                seenThemes: {
                    ...Object.values(Themes).reduce(
                        (acc: SeenThemes, theme) => ({ ...acc, [theme]: false }),
                        {} as SeenThemes,
                    ),
                    [Themes.Dark]: true,
                },
                setActiveTheme: (theme) =>
                    set(
                        (state) => ({ activeTheme: theme, seenThemes: { ...state.seenThemes, [theme]: true } }),
                        undefined,
                        'setActiveTheme',
                    ),
            }),
            {
                name: 'theme-storage',
            },
        ),
    ),
);

export function useActiveTheme(): Theme {
    const activeThemeName = useThemeStore((state) => state.activeTheme);
    return ThemeDefinitions[activeThemeName];
}
