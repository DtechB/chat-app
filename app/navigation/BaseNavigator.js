import { createStackNavigator } from "@react-navigation/stack";
import AddChat from "../screens/AddChat";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const BaseNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#2c6bed" },
      headerTintColor: "white",
      headerTitleStyle: { color: "white" },
    }}
    initialRouteName="Home"
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddChat" component={AddChat} />
  </Stack.Navigator>
);

export default BaseNavigator;
