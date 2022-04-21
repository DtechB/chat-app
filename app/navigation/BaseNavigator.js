import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const BaseNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#2c6bed" },
      headerTintColor: "white",
      headerTitleStyle: { color: "white" },
    }}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default BaseNavigator;
