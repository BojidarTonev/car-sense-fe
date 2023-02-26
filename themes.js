import { PixelRatio } from 'react-native';
import { SPACE } from "./spacing";

const screenDensity = PixelRatio.get();

const multiplier = 1.618; // Golden Ratio

const fontSizes = {
    h1: Math.round((screenDensity / 160) * multiplier * SPACE[5]),
    h2: Math.round((screenDensity / 160) * multiplier * SPACE[4]),
    h3: Math.round((screenDensity / 160) * multiplier * SPACE[3]),
    body: Math.round((screenDensity / 160) * multiplier * SPACE[2]),
    caption: Math.round((screenDensity / 160) * multiplier * SPACE[1]),
};

const colors = {
    blue: {
      main: '#00078B',
      light: '#3B5ED6'
    },
    orange : {
      main: '#844600',
      light: '#FF8800',
      lighter: '#FFE399'
    },
    grey: {
       main: '#B3B3B3',
       light: '#CCCCCC',
       lighter: '#E7E7E7'
    }
};

export default { fontSizes , colors }