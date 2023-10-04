import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export enum Themes {
    Default = 'default',
    Test = 'test',
}

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
                activeTheme: Themes.Default,
                seenThemes: {
                    ...Object.values(Themes).reduce(
                        (acc: SeenThemes, theme) => ({ ...acc, [theme]: false }),
                        {} as SeenThemes,
                    ),
                    [Themes.Default]: true,
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
