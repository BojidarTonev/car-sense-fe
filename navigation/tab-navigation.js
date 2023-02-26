import { View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { CommunityStackScreen, GasStationsStackScreen, HomeStackScreen, SettingsStackScreen, WalletStackScreen } from "./stack-navigators";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import themes from '../themes';
import spacing from '../spacing';

const { colors, fontSizes } = themes;
const { margin, padding, radius } = spacing;

const navigationTabSharedProps = {
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 35, color: colors.blue.main, fontFamily: 'bold' }, //fontFamily: 'HeadingBold',
    headerTransparent: true,
    tabBarShowLabel: false,
};

const Tab = createBottomTabNavigator();

export const BottomTabScreenNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.orange.light,
            tabBarInactiveTintColor: colors.blue.main,
            tabBarStyle: {
                marginBottom: margin['m'] + 5,
                marginHorizontal: margin['m'],
                borderRadius: radius['xl2'],
                position: 'absolute',
            }
        }}
    >
        <Tab.Screen
            name="GasStationsStack"
            component={GasStationsStackScreen}
            options={({route}) => ({
                headerTitle: 'Gas Stations',
                tabBarIcon: ({color}) => (
                    <Icon name="gas-station" size={30} color={color} />
                ),
                ...navigationTabSharedProps
            })}
        />
        <Tab.Screen
            name="CommunityStack"
            component={CommunityStackScreen}
            options={({route}) => ({
                headerTitle: 'Community',
                tabBarIcon: ({color}) => (
                    <Icon name="account-group" size={30} color={color} />
                ),
                ...navigationTabSharedProps
            })}
        />
        <Tab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={({route}) => ({
                headerTitle: 'My Vehicles',
                tabBarIcon: ({focused}) => (
                    <View style={{backgroundColor: colors.blue.main, padding: padding['m'], position: 'absolute', borderRadius: radius['l']}}>
                        <Icon name="car" size={30} color={focused ? colors.orange.light : colors.grey.lighter} />
                    </View>
                ),
                ...navigationTabSharedProps
            })}
        />
        <Tab.Screen
            name="WalletStack"
            component={WalletStackScreen}
            options={({route}) => ({
                headerTitle: 'All Cards',
                tabBarIcon: ({color}) => (
                    <Icon name="wallet" size={30} color={color} />
                ),
                ...navigationTabSharedProps
            })}
        />
        <Tab.Screen
            name="SettingsStack"
            component={SettingsStackScreen}
            options={({route}) => ({
                headerTitle: 'Settings',
                tabBarIcon: ({color}) => (
                     <Icon name="head-dots-horizontal" size={30} color={color} />
                ),
                ...navigationTabSharedProps
            })}
        />
    </Tab.Navigator>
)