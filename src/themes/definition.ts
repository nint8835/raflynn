export enum Themes {
    Dark = 'dark',
    Light = 'light',
}

export type ThemeDetails = {
    title: string;
    subtitle: string;
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
    ThemeDisplay: {};
    RootLayout: RootLayoutProps;
    Container: ContainerProps;
    Prose: ProseProps;
};

export interface ThemeComponents {
    ThemeDisplay: React.FC;
    RootLayout: React.FC<RootLayoutProps>;
    Container: React.FC<ContainerProps>;
    Prose: React.FC<ProseProps>;
}

export interface ThemeMeta {
    Details: ThemeDetails;
}

export interface Theme extends ThemeComponents, ThemeMeta {}
