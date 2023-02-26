import { createStackNavigator } from '@react-navigation/stack';
import {MyVehiclesScreen} from "../../screens/home/my-vehicles-screen";
import {VehicleDetailsOverviewScreen} from "../../screens/home/vehicle-details-overview-screen";
import {VehicleDetailsFuelHistoryScreen} from "../../screens/home/vehicle-details-fuel-history-screen";
import {VehicleDetailsScreen} from "../../screens/home/vehicle-details-details";
import {AddVehicleScreen} from "../../screens/home/add-vehicle-screen";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="MyVehicles"
            component={MyVehiclesScreen}
            options={{headerShown: false}}
        />
        <HomeStack.Screen
            name="VehicleDetailsOverview"
            component={VehicleDetailsOverviewScreen}
            options={{headerShown: false}}
        />
        <HomeStack.Screen
            name="VehicleDetailsFuelHistory"
            component={VehicleDetailsFuelHistoryScreen}
            options={{headerShown: false}}
        />
        <HomeStack.Screen
            name="VehicleDetailsDetails"
            component={VehicleDetailsScreen}
            options={{headerShown: false}}
        />
        <HomeStack.Screen
            name="AddVehicle"
            component={AddVehicleScreen}
            options={{headerShown: false}}
        />
    </HomeStack.Navigator>
)