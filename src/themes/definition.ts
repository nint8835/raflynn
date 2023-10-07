export enum Themes {
    Default = 'default',
    Test = 'test',
}

export type ThemeDetails = {
    title: string;
    subtitle: string;
};

export interface Theme {
    Details: ThemeDetails;

    ThemeDisplay: React.FC;
}
