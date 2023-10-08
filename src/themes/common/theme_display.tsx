import clsx from 'clsx';

import { useActiveTheme } from '@/themes/state';

export function BaseThemeDisplay(options: {
    containerClasses?: string;
    titleClasses?: string;
    subtitleClasses?: string;
}): React.FC {
    return function ThemeDisplay() {
        const activeTheme = useActiveTheme();

        return (
            <div className={clsx('fixed bottom-4 left-4 rounded-md p-2', options.containerClasses)}>
                <div className={clsx('font-bold', options.titleClasses)}>{activeTheme.Details.title}</div>
                <div className={clsx('italic', options.subtitleClasses)}>{activeTheme.Details.subtitle}</div>
            </div>
        );
    };
}
