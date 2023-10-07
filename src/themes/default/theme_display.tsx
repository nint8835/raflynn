import { Details } from './details';

export function ThemeDisplay() {
    return (
        <div className="fixed bottom-4 left-4 rounded-md p-2">
            <div className="font-bold text-zinc-300">{Details.title}</div>
            <div className="italic text-zinc-400">{Details.subtitle}</div>
        </div>
    );
}
