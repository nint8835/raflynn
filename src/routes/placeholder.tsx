import { Themes, useThemeStore } from '../util/state';

export default function Placeholder({ text = 'Placeholder' }: { text?: string }) {
    const activeTheme = useThemeStore((state) => state.activeTheme);
    const setActiveTheme = useThemeStore((state) => state.set);

    let className = 'flex h-full w-full items-center justify-center font-mono text-2xl font-black';
    switch (activeTheme) {
        case Themes.Default:
            className += ' text-emerald-500';
            break;
        case Themes.Test:
            className += ' text-teal-500';
            break;
    }

    return (
        <div
            className={className}
            onClick={() => {
                setActiveTheme(Themes.Test);
            }}
        >
            {text}
        </div>
    );
}
