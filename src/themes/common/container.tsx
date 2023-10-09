import clsx from 'clsx';

import { ContainerProps } from '@/themes/definition';

export function BaseContainer(options: { classes: string }): React.FC<ContainerProps> {
    return function Container({ children }: ContainerProps) {
        return <div className={clsx('w-full p-2', options.classes)}>{children}</div>;
    };
}
