import type { Theme } from './definition';
import { Themes } from './definition';

import * as Default from './default';
import * as Test from './test';

const themes: Record<Themes, Theme> = {
    [Themes.Default]: Default,
    [Themes.Test]: Test,
};

export default themes;
