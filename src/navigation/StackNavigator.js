import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import Preferences from "../views/Preferences";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Preferences" component={Preferences} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
