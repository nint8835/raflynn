export enum Themes {
    Default = 'default',
    Test = 'test',
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
