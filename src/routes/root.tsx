import DevThemeSelector from '../components/dev_theme_selector';
import ThemeDisplay from '../components/theme_display';

export default function Root() {
    return (
        <>
            <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-black text-red-500">
                Hello, world!
            </div>
            <ThemeDisplay />
            {import.meta.env.MODE === 'development' && <DevThemeSelector />}
        </>
    );
}
