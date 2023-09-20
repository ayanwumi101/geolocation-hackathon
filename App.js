import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Prompt_400Regular, Prompt_500Medium, Prompt_700Bold } from "@expo-google-fonts/prompt";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './screens/onboarding/FirstPage';
import ThirdPage from './screens/onboarding/ThirdPage';
import SecondPage from './screens/onboarding/SecondPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homepage/Index'
import NotificationScreen from './screens/notifications/Index'
import ResourcesScreen from './screens/resources/Index'
import MoreScreen from './screens/more/Index'
import { Home3, Notification, Element3, Information } from 'iconsax-react-native'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Onboarding'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Onboarding'
        >
          {() => (
            <Stack.Navigator
              initialRouteName='onboarding-1'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name='onboarding-1'
                component={FirstPage}
              />
              <Stack.Screen
                name='onboarding-2'
                component={SecondPage}
              />
              <Stack.Screen
                name='onboarding-3'
                component={ThirdPage}
              />
            </Stack.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="HomeTabNavigator"
          options={{ headerShown: false }}
        >
          {() => (
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#19686A',
                tabBarStyle: {
                  paddingTop: 5,
                  paddingBottom: 2,
                },
                tabBarLabelStyle: {
                  fontFamily: 'Prompt_400Regular',
                  fontSize: 12,
                },
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
                name="Notifications"
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
          )}
        </Stack.Screen>
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName='onboarding-1'>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name='onboarding-1'
              component={FirstPage}
             />
             <Stack.Screen
              name='onboarding-2'
              component={SecondPage}
             />
             <Stack.Screen
              name='onboarding-3'
              component={ThirdPage}
             />
             
          </Stack.Group>
        </Stack.Navigator> */}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
