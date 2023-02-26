import {NavigationContainer} from "@react-navigation/native";
import {BottomTabScreenNavigator} from "./navigation/tab-navigation";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {
  const [loaded] = useFonts({
    'regular': Montserrat_400Regular,
    'medium': Montserrat_500Medium,
    'semi-bold': Montserrat_600SemiBold,
    'bold': Montserrat_700Bold
  });

  if(!loaded) return null

  return (
      <NavigationContainer>
        <BottomTabScreenNavigator />
      </NavigationContainer>
  );
}