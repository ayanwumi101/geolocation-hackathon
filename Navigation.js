import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "./screens/onboarding/FirstPage";
import SecondPage from "./screens/onboarding/SecondPage";
import ThirdPage from "./screens/onboarding/ThirdPage";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" headerMode="none">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation