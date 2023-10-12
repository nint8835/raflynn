import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

import { Container } from '@/components/themed';
import Themes from '@/themes';
import type { Themes as ThemesEnum } from '@/themes/definition';
import { useThemeStore } from '@/themes/state';

function hideText(text: string): string {
    return text.replace(/\w/g, '?');
}

export function BaseThemesLayout(options: {
    titleClasses?: string;
    activeThemeClasses?: string;
    unlockedThemeClasses?: string;
    lockedThemeClasses?: string;
}): React.FC {
    return function ThemesLayout() {
        const seenThemes = useThemeStore((state) => state.seenThemes);
        const activeTheme = useThemeStore((state) => state.activeTheme);
        const setActiveTheme = useThemeStore((state) => state.setActiveTheme);

        return (
            <Container fullWidth>
                <h1 className={clsx('text-2xl font-bold', options.titleClasses)}>Themes</h1>
                <div className={clsx('mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2')}>
                    {Object.entries(Themes).map(([themeName, theme]) => (
                        <div
                            key={themeName}
                            className={clsx(
                                'flex flex-row content-center justify-between rounded-md p-4 transition-colors',
                                seenThemes[themeName as ThemesEnum]
                                    ? clsx('cursor-pointer', options.unlockedThemeClasses)
                                    : options.lockedThemeClasses,
                                activeTheme === themeName && options.activeThemeClasses,
                            )}
                            onClick={() => {
                                if (!seenThemes[themeName as ThemesEnum]) {
                                    return;
                                }
                                setActiveTheme(themeName as ThemesEnum);
                            }}
                        >
                            <div>
                                <div>
                                    {seenThemes[themeName as ThemesEnum]
                                        ? theme.Details.title
                                        : hideText(theme.Details.title)}
                                </div>
                                {seenThemes[themeName as ThemesEnum] ? (
                                    <div>{theme.Details.subtitle}</div>
                                ) : (
                                    <div className={clsx('italic')}>{theme.Details.hint}</div>
                                )}
                            </div>
                            {seenThemes[themeName as ThemesEnum] ? (
                                <CheckIcon className={clsx('h-8 w-8 self-center')} />
                            ) : (
                                <XMarkIcon className={clsx('h-8 w-8 self-center')} />
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        );
    };
}
