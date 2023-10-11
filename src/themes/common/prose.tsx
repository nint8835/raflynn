import clsx from 'clsx';

import type { ProseProps } from '@/themes/definition';

export function BaseProse(options: { classes: string }): React.FC<ProseProps> {
    return function Prose({ children }: ProseProps) {
        return <div className={clsx('prose', options.classes)}>{children}</div>;
    };
}
