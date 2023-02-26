import { createStackNavigator } from '@react-navigation/stack';
import {SettingsScreen} from "../../screens/settings/settings";

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{headerShown: false}}
        />
    </SettingsStack.Navigator>
)