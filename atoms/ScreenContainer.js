import { SafeAreaView, StyleSheet } from 'react-native';
import {margin} from "../spacing";
import themes from '../themes';

const { colors } = themes;

const ScreenContainer = ({ children, backgroundColor=colors.grey.background, paddingLeft = margin['m'] }) => {
    return (
        <SafeAreaView style={[styles.container, {backgroundColor, paddingLeft: paddingLeft}]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: margin['xl'],
        paddingRight: margin['m'],
    },
});

export default ScreenContainer;