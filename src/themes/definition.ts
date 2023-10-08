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

export interface Theme {
    Details: ThemeDetails;

    ThemeDisplay: React.FC;
    RootLayout: React.FC<RootLayoutProps>;
}
