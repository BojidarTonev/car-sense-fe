import { createStackNavigator } from '@react-navigation/stack';
import {AllGasStationsScreen} from "../../screens/gas-stations/all-gas-stations-screen";
import {GasStationDetailsScreen} from "../../screens/gas-stations/gas-station-details-screen";

const GasStationsStack = createStackNavigator();

export const GasStationsStackScreen = () => (
    <GasStationsStack.Navigator>
        <GasStationsStack.Screen
            name="AllGasStations"
            component={AllGasStationsScreen}
            options={{headerShown: false}}
        />
        <GasStationsStack.Screen
            name="GasStationDetails"
            component={GasStationDetailsScreen}
            options={{headerShown: false}}
        />
    </GasStationsStack.Navigator>
)