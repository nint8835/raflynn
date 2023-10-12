export enum Themes {
    Dark = 'dark',
    Light = 'light',
}

export type ThemeDetails = {
    title: string;
    subtitle: string;
    hint: string;
};

export type RootLayoutProps = {
    children: React.ReactNode;
};

export type ContainerProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
};

export type ProseProps = {
    children: React.ReactNode;
};

export type ThemeComponentProps = {
    RootLayout: RootLayoutProps;
    ThemesLayout: {};

    ThemeDisplay: {};
    Container: ContainerProps;
    Prose: ProseProps;
};

export interface ThemeComponents {
    RootLayout: React.FC<RootLayoutProps>;
    ThemesLayout: React.FC;

    ThemeDisplay: React.FC;
    Container: React.FC<ContainerProps>;
    Prose: React.FC<ProseProps>;
}

export interface ThemeMeta {
    Details: ThemeDetails;
}

export interface Theme extends ThemeComponents, ThemeMeta {}
