import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";

import Details from "../Screens/Details";
import SearchScreen from "../Screens/SearchScreen";

const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="searchScreen" component={SearchScreen} />
        <stack.Screen name="Details" component={Details} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routes;
