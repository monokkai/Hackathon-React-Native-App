import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "./pages/user";
import Orders from "./(tabs)/Orders";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Orders" component={Orders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
