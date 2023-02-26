import { Text } from 'react-native';

const CSText = ({ children, fontSize = 16, color = 'black', fontFamily = 'regular', fontWeight = 'normal', style }) => {
    return (
        <Text style={[{ fontSize, color, fontWeight, fontFamily }, style]}>
            {children}
        </Text>
    );
};

export default CSText;