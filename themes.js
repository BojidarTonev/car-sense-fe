import {Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const baseFontSize = width < 375 ? 14 : 16;

const goldenRatio = 1.618;

const fontSizes = {
    h1: Math.round(baseFontSize * goldenRatio * 1.4),
    h2: Math.round(baseFontSize * goldenRatio),
    regular: Math.round(baseFontSize),
    small: Math.round(baseFontSize / goldenRatio),
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
       main: '#E7E7E7',
       background: '#C4C4C4'
    }
};

export default { fontSizes , colors }