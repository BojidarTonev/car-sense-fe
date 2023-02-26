import { createStackNavigator } from '@react-navigation/stack';
import {AllCardsScreen} from "../../screens/wallet/all-cards";
import {AddCardScreen} from "../../screens/wallet/add-card-screen";

const WalletStack = createStackNavigator();

export const WalletStackScreen = () => (
    <WalletStack.Navigator>
        <WalletStack.Screen
            name="AllCards"
            component={AllCardsScreen}
            options={{headerShown: false}}
        />
        <WalletStack.Screen
            name="AddCard"
            component={AddCardScreen}
            options={{headerShown: false}}
        />
    </WalletStack.Navigator>
)