import clsx from 'clsx';

import { ContainerProps } from '@/themes/definition';

export function BaseContainer(options: { classes: string }): React.FC<ContainerProps> {
    return function Container({ children, fullWidth = false }: ContainerProps) {
        return <div className={clsx('span w-full p-2', options.classes, fullWidth && 'col-span-2')}>{children}</div>;
    };
}
