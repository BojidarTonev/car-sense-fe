import {Platform} from "react-native";

export const getShadowStyle = (elevation = 5, shadowColor = 'black') => {
    return Platform.select({
        ios: {
            shadowColor: shadowColor,
            shadowOffset: { width: 5, height: 15 },
            shadowOpacity: 1,
            shadowRadius: elevation,
        },
        android: {
            elevation: elevation,
            shadowColor: shadowColor
        },
    });
};