import { SafeAreaView, StyleSheet } from 'react-native';
import {margin} from "../spacing";
import themes from '../themes';

const { colors } = themes;

const ScreenContainer = ({ children, backgroundColor=colors.grey.lighter }) => {
    return (
        <SafeAreaView style={[styles.container, {backgroundColor}]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: margin['xl'],
        paddingHorizontal: margin['m'],
    },
});

export default ScreenContainer;