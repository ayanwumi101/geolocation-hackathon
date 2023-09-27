import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homepage/Index'
import NotificationScreen from './screens/notifications/Index'
import ResourcesScreen from './screens/resources/Index'
import MoreScreen from './screens/more/Index'
import { Home3, Notification, Element3, Information } from 'iconsax-react-native'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#19686A'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Home3 name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Resources"
                component={ResourcesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Information name="information" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Notification name="notifications" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Element3 name="home" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs