import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingView from "../views/LadingView";
import CRUD from "../views/CRUD";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingView} />
        <Stack.Screen name="CRUD" component={CRUD} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
