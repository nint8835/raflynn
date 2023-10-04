export default function Placeholder({ text = 'Placeholder' }: { text?: string }) {
    return (
        <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-black text-emerald-500">
            {text}
        </div>
    );
}
