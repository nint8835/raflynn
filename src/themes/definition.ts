import { type ReactNode } from 'react';

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
};

export type ThemeComponentProps = {
    ThemeDisplay: {};
    RootLayout: RootLayoutProps;
    Container: ContainerProps;
};

export interface ThemeComponents {
    ThemeDisplay: React.FC;
    RootLayout: React.FC<RootLayoutProps>;
    Container: React.FC<ContainerProps>;
}

export interface ThemeMeta {
    Details: ThemeDetails;
}

export interface Theme extends ThemeComponents, ThemeMeta {}
