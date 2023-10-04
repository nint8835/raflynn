import clsx from 'clsx';
import { ThemeDetails } from '../themes/details';
import { useThemeStore } from '../themes/state';

export default function ThemeDisplay() {
    const activeTheme = useThemeStore((state) => state.activeTheme);
    const activeThemeDetails = ThemeDetails[activeTheme];

    return (
        <div
            className={clsx(
                'fixed bottom-4 left-4 rounded-md p-2',
                activeThemeDetails.classNames.themeDisplay?.container,
            )}
        >
            <div className={clsx('font-bold', activeThemeDetails.classNames.themeDisplay?.title)}>
                {activeThemeDetails.title}
            </div>
            <div className={clsx('italic', activeThemeDetails.classNames.themeDisplay?.subtitle)}>
                {activeThemeDetails.subtitle}
            </div>
        </div>
    );
}
