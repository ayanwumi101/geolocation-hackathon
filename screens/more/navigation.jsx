import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from './screens/signup';

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="signup"
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="settings" component={HomeScreen} />
            <Stack.Screen name="saved_information" component={NotificationScreen} />
            <Stack.Screen name="help_center" component={ResourcesScreen} />
            <Stack.Screen name="about_us" component={MoreScreen} /> */}
            <Stack.Screen name="signup" component={signup} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigation