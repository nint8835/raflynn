import clsx from 'clsx';

import DevThemeSelector from '@/components/dev_theme_selector';
import { ThemeDisplay } from '@/components/themed';
import type { RootLayoutProps } from '@/themes/definition';

export function BaseRootLayout(options: { mainClasses: string }): React.FC<RootLayoutProps> {
    return function RootLayout({ children }: RootLayoutProps) {
        return (
            <div className={clsx('h-fit min-h-screen p-2', options.mainClasses)}>
                {children}
                <ThemeDisplay />
                {import.meta.env.MODE === 'development' && <DevThemeSelector />}
            </div>
        );
    };
}
