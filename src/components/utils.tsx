import React, { type ReactNode } from 'react';

import { type ThemeComponentProps } from '@/themes/definition';
import { useActiveTheme } from '@/themes/state';

export function themedComponent<
    P extends keyof ThemeComponentProps,
    ComponentProps extends ThemeComponentProps[P],
    ComponentType extends (props: ComponentProps) => ReactNode,
>(componentName: P): (props: ComponentProps) => ReactNode {
    return function ThemedComponent(props: ComponentProps) {
        const activeTheme = useActiveTheme();
        const ThemeComponent = activeTheme[componentName] as unknown as ComponentType;

        return React.createElement(ThemeComponent, props);
    };
}
