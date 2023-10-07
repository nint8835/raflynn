import clsx from 'clsx';
import DevThemeSelector from '../../components/dev_theme_selector';
import ThemeDisplay from '../../components/theme_display';
import type { RootLayoutProps } from '../definition';

export function BaseRootLayout(options: { mainClasses: string }): React.FC<RootLayoutProps> {
    return function RootLayout({ children }: RootLayoutProps) {
        return (
            <div className={clsx('h-screen p-2', options.mainClasses)}>
                {children}
                <ThemeDisplay />
                {import.meta.env.MODE === 'development' && <DevThemeSelector />}
            </div>
        );
    };
}
