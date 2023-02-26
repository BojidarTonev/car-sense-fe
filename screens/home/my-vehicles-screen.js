import React from 'react';
import CSText from "../../atoms/CSText";
import {View, Image, StyleSheet, Pressable} from 'react-native';
import ScreenContainer from "../../atoms/ScreenContainer";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import themes from '../../themes';
import spacing from '../../spacing';
import {getShadowStyle} from "../../utils";

const { colors, fontSizes } = themes;
const { radius, margin } = spacing;

const sampleData = [{
    name: 'Burzata Pantera',
    imgUrl: 'https://res.cloudinary.com/dsvitxv34/image/upload/v1677380456/car_dxbjyz.jpg',
    distanceTravelled: 2567,
    moneyForFuel: 4320,
    lastOilChange: '12/02/23',
    insuranceTo: '12/02/23',
    selected: true
}, {
    name: 'Bavnata Panamera',
    imgUrl: 'https://res.cloudinary.com/dsvitxv34/image/upload/v1677380456/car_dxbjyz.jpg',
    distanceTravelled: 2567,
    moneyForFuel: 4320,
    lastOilChange: '12/02/23',
    insuranceTo: '12/02/23'
}];

export const MyVehiclesScreen = ({navigation}) => {

    const onAddVehiclePress = () => {
        navigation.navigate("HomeStack", {
            screen: "AddVehicle"
        })
    };

    const onMyVehiclePress = () => {
        navigation.navigate("HomeStack", {
            screen: "VehicleDetailsOverview"
        })
    }

    const renderVehicle = (idx, imgUrl, name, distanceTravelled, moneyForFuel, lastOilChange, insuranceTo, selected) => {
        const backgroundColor = selected ? colors.orange.lighter : colors.grey.main;
        return(<Pressable key={`my-vehicle-${idx}`} style={[{
            marginBottom: margin['m'] + 10,
            backgroundColor, ...styles.vehicleWrapper
        }, getShadowStyle()]} onPress={() => onMyVehiclePress()}>
                <Image source={{uri: imgUrl}} style={{width: 200, height: 120, borderRadius: radius['xl'], marginRight: margin['m']}} />
                <View>
                    <CSText color={colors.blue.main} fontSize={fontSizes.regular + 3} fontFamily="bold" style={{marginVertical: margin['s']}}>{name}</CSText>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: margin['xs']}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="run" size={30} color={colors.blue.main} />
                            <CSText color={colors.blue.light} fontFamily="semi-bold">{distanceTravelled}km</CSText>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="currency-usd" size={30} color={colors.blue.main} />
                            <CSText color={colors.blue.light} fontFamily="semi-bold">{moneyForFuel}lv</CSText>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="tag" size={30} color={colors.blue.main} />
                            <CSText color={colors.blue.light} fontFamily="semi-bold">{lastOilChange}</CSText>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="oil" size={30} color={colors.blue.main} style={{marginLeft: margin['m']}} />
                            <CSText color={colors.blue.light} fontFamily="semi-bold">{insuranceTo}</CSText>
                        </View>
                    </View>
                </View>
            </Pressable>)
    };

    return(<ScreenContainer paddingLeft={0}>
        <ScrollView>
            {sampleData.map((item, idx) => {
                const { name, imgUrl, distanceTravelled, moneyForFuel, lastOilChange, insuranceTo, selected } = item;
                return renderVehicle(idx, imgUrl, name, distanceTravelled, moneyForFuel, lastOilChange, insuranceTo, selected)
            })}
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onAddVehiclePress()}
                style={styles.addButton}
            >
                <Icon name="plus" size={fontSizes.h1} color="white" />
            </TouchableOpacity>
        </ScrollView>
    </ScreenContainer>)
}

const styles = StyleSheet.create({
    vehicleWrapper: {
        flexDirection: 'row',
        // to move the Image and create the slide effect
        marginLeft: -110,
        borderRadius: radius['m'] + 5,
    },
    addButton: {
        marginTop: margin['s'],
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: radius['xl'],
        backgroundColor: colors.orange.light
    }
});