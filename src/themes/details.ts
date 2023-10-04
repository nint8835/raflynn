export enum Themes {
    Default = 'default',
    Test = 'test',
}

export type ThemeDetails = {
    title: string;
    subtitle: string;
    classNames: {
        themeDisplay?: {
            container?: string;
            title?: string;
            subtitle?: string;
        };
    };
};

export const ThemeDetails: { [key in Themes]: ThemeDetails } = {
    [Themes.Default]: {
        title: 'Default',
        subtitle: 'The default theme',
        classNames: {
            themeDisplay: {
                title: 'text-zinc-300',
                subtitle: 'text-zinc-400',
            },
        },
    },
    [Themes.Test]: {
        title: 'Test',
        subtitle: 'A test theme',
        classNames: {
            themeDisplay: {
                container: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600',
            },
        },
    },
};
