import { Text } from 'react-native';
import themes from '../themes';

const { fontSizes } = themes;

const CSText = ({ children, fontSize = fontSizes.regular, color = 'black', fontFamily = 'regular', style }) => {
    return (
        <Text style={[{ fontSize, color, fontFamily }, style]}>
            {children}
        </Text>
    );
};

export default CSText;