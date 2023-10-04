import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function RouterError() {
    const error = useRouteError();

    let errorText: string;

    if (isRouteErrorResponse(error)) {
        errorText = error.statusText;
    } else {
        errorText = (error as Error).message || 'Unknown error';
    }

    return (
        <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-black text-red-500">
            {errorText}
        </div>
    );
}
