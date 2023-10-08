import { Details } from './details';

export function ThemeDisplay() {
    return (
        <div className="fixed bottom-4 left-4 rounded-md bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 p-2">
            <div className="font-bold text-black">{Details.title}</div>
            <div className="italic text-black">{Details.subtitle}</div>
        </div>
    );
}
