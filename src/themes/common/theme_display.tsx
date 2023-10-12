import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { useActiveTheme } from '@/themes/state';

export function BaseThemeDisplay(options: {
    containerClasses?: string;
    titleClasses?: string;
    subtitleClasses?: string;
}): React.FC {
    return function ThemeDisplay() {
        const activeTheme = useActiveTheme();
        const navigate = useNavigate();

        return (
            <div
                className={clsx(
                    'fixed bottom-4 left-4 cursor-pointer rounded-md p-2 transition-all',
                    options.containerClasses,
                )}
                onClick={() => navigate('themes')}
            >
                <div className={clsx('font-bold', options.titleClasses)}>{activeTheme.Details.title}</div>
                <div className={clsx('italic', options.subtitleClasses)}>{activeTheme.Details.subtitle}</div>
            </div>
        );
    };
}
