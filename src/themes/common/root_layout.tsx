import clsx from 'clsx';

import DevThemeSelector from '@/components/dev_theme_selector';
import { ThemeDisplay } from '@/components/themed';
import type { RootLayoutProps } from '@/themes/definition';

export function BaseRootLayout(options: { mainClasses: string }): React.FC<RootLayoutProps> {
    return function RootLayout({ children }: RootLayoutProps) {
        return (
            <>
                <div
                    className={clsx(
                        'grid h-fit min-h-screen grid-cols-1 gap-2 p-2 lg:grid-cols-2',
                        options.mainClasses,
                    )}
                >
                    {children}
                </div>
                <ThemeDisplay />
                {import.meta.env.MODE === 'development' && <DevThemeSelector />}
            </>
        );
    };
}
