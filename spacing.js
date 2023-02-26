const GOLDEN_RATIO = 1.618;

export const SPACE = {
    1: 4,
    2: 6,
    3: 10,
    4: 16,
    5: 26,
    6: 42,
};

export const margin = {
    'xs': SPACE[1],
    's': SPACE[2] * GOLDEN_RATIO,
    'm': SPACE[3] * GOLDEN_RATIO,
    'l': SPACE[4] * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl': SPACE[5] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl2': SPACE[6] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
};

export const padding = {
    'xs': SPACE[1],
    's': SPACE[2],
    'm': SPACE[3] * GOLDEN_RATIO,
    'l': SPACE[4] * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl': SPACE[5] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl2': SPACE[6] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
};

export const radius = {
    'xs': SPACE[1],
    's': SPACE[2],
    'm': SPACE[3] * GOLDEN_RATIO,
    'l': SPACE[4] * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl': SPACE[5] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
    'xl2': SPACE[6] * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO * GOLDEN_RATIO,
}

export default { margin , padding, radius }