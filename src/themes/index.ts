import type { Theme } from './definition';
import { Themes } from './definition';
import * as Dark from './dark';
import * as Light from './light';

const themes: Record<Themes, Theme> = {
    [Themes.Dark]: Dark,
    [Themes.Light]: Light,
};

export default themes;
