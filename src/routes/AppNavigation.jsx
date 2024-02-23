import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingView from "../views/LadingView";
import CRUD from "../views/CRUD";
import Idols from "../views/CRUD/Idols";
import CreatIdol from "../views/CRUD/CreatIdol";
import { DBProvider } from "../context/DBProvider";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DBProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LandingView} />
          <Stack.Screen name="CRUD" component={CRUD} />
          <Stack.Screen name="get" component={Idols} />
          <Stack.Screen name="add" component={CreatIdol} />
        </Stack.Navigator>
      </DBProvider>
    </NavigationContainer>
  );
};
