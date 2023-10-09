import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import ThemeDefinitions from '@/themes';
import { type Theme, Themes } from '@/themes/definition';

export type SeenThemes = { [key in Themes]: boolean };

export interface ThemeState {
    activeTheme: Themes;
    seenThemes: SeenThemes;
    setActiveTheme: (theme: Themes) => void;
}

const isLight = window.matchMedia('(prefers-color-scheme: light)');
const defaultTheme = isLight.matches ? Themes.Light : Themes.Dark;

export const useThemeStore = create<ThemeState>()(
    devtools(
        persist(
            (set) => ({
                activeTheme: defaultTheme,
                seenThemes: {
                    ...Object.values(Themes).reduce(
                        (acc: SeenThemes, theme) => ({ ...acc, [theme]: false }),
                        {} as SeenThemes,
                    ),
                    [defaultTheme]: true,
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
