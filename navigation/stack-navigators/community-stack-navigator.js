import { createStackNavigator } from '@react-navigation/stack';
import {CommunityScreen} from "../../screens/community/community";

const CommunityStack = createStackNavigator();

export const CommunityStackScreen = () => (
    <CommunityStack.Navigator>
        <CommunityStack.Screen
            name="Community"
            component={CommunityScreen}
            options={{headerShown: false}}
        />
    </CommunityStack.Navigator>
)