import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export enum Themes {
    Default = 'default',
    Test = 'test',
}

export interface ThemeState {
    activeTheme: Themes;
    set: (theme: Themes) => void;
}

export const useThemeStore = create<ThemeState>()(
    devtools(
        persist(
            (set) => ({
                activeTheme: Themes.Default,
                set: (theme) => set((state) => ({ ...state, activeTheme: theme })),
            }),
            {
                name: 'theme-storage',
            },
        ),
    ),
);
