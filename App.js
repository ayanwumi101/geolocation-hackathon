import 'react-native-gesture-handler'
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
import NotificationsScreen from './screens/notifications/notifications'
import NotificationDetails from './screens/notificationDetails/notificationDetails'
import ResourcesScreen from './screens/resources/Index'
import MoreScreen from './screens/more/Index'
import Signup from './screens/more/screens/signup';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EmergenciesList from './screens/resources/components/EmergenciesList/EmergenciesList'
import EmergencyDetails from './screens/resources/components/EmergencyDetails/EmergencyDetails';
import AnnounceEmergency from './screens/AnnounceEmergency';
import Feedback from './screens/Feedback';
import StateScreen from './screens/State';
import ExecutiveDetailsScreen from './screens/ExecutiveDetails';
import AgenciesScreen from './screens/AgenciesList';
import AgencyDetailsScreen from './screens/AgencyDetails';
import {Ionicons, AntDesign, Entypo} from '@expo/vector-icons'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import { createNotifications } from 'react-native-notificated';
import SigninScreen from './screens/Signin'
import ProfileScreen from './screens/Profile'


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

  const { NotificationsProvider } = createNotifications({
    isNotch: true,
    defaultStylesSettings: {
      globalConfig: {
        titleSize: 20,
        descriptionSize: 14,
      }
    }
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotificationsProvider>
        <BottomSheetModalProvider>
          <StatusBar
            animated={true}
            translucent={true}
            networkActivityIndicatorVisible={true}
            style="dark"
          />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Onboarding"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Onboarding">
                {() => (
                  <Stack.Navigator
                    initialRouteName="onboarding-1"
                    screenOptions={{ headerShown: false }}
                  >
                    <Stack.Screen name="onboarding-1" component={FirstPage} />
                    <Stack.Screen name="onboarding-2" component={SecondPage} />
                    <Stack.Screen name="onboarding-3" component={ThirdPage} />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="more">
                {() => (
                  <Stack.Navigator
                    initialRouteName="signup"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="signup"
                      component={Signup}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Sign Up",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                          // fontSize: 20,
                        },
                        // headerLeft: () => (
                        //   <ArrowLeft2 color='#19686A' size={35} onPress={() => navigation.goBack()}  />
                        // ),
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="notification-info">
                {() => (
                  <Stack.Navigator
                    initialRouteName="notification-details"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="notification-details"
                      component={NotificationDetails}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Notification Details",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="emergencies">
                {() => (
                  <Stack.Navigator
                    initialRouteName="emergencies-list"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="emergencies-list"
                      component={EmergenciesList}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Emergencies",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                    <Stack.Screen
                      name="emergency-details"
                      component={EmergencyDetails}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Emergency Details",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
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
                      tabBarActiveTintColor: "#19686A",
                      tabBarStyle: {
                        paddingTop: 5,
                        paddingBottom: 5,
                        height: 70,
                        borderTopStyle: "solid",
                        borderTopWidth: 1,
                        borderColor: "lightgray",
                      },
                      tabBarLabelStyle: {
                        fontFamily: "Prompt_400Regular",
                        fontSize: 14,
                      },
                    }}
                  >
                    <Tab.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <Entypo name="home" color={color} size={25} />
                        ),
                      }}
                    />
                    <Tab.Screen
                      name="Resources"
                      component={ResourcesScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <AntDesign
                            name="exclamationcircle"
                            color={color}
                            size={25}
                          />
                        ),
                      }}
                    />
                    <Tab.Screen
                      name="Notifications"
                      component={NotificationsScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons
                            name="notifications"
                            color={color}
                            size={25}
                          />
                        ),
                      }}
                    />
                    <Tab.Screen
                      name="More"
                      component={MoreScreen}
                      options={{
                        tabBarIcon: ({ color, size }) => (
                          <AntDesign name="appstore1" color={color} size={25} />
                        ),
                      }}
                    />
                  </Tab.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="announce-emergency">
                {() => (
                  <Stack.Navigator
                    initialRouteName="announce"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="announce"
                      component={AnnounceEmergency}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Announce Emergency",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="signin-screen">
                {() => (
                  <Stack.Navigator
                    initialRouteName="signin"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="signin"
                      component={SigninScreen}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Signin",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="profile-screen">
                {() => (
                  <Stack.Navigator
                    initialRouteName="profile"
                    screenOptions={{ headerShown: false }}
                  >
                    <Stack.Screen
                      name="profile"
                      component={ProfileScreen}
                      screenOptions={{ headerShown: false }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="feedback">
                {() => (
                  <Stack.Navigator
                    initialRouteName="feedback-screen"
                    screenOptions={{ headerShown: true }}
                  >
                    <Stack.Screen
                      name="feedback-screen"
                      component={Feedback}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "Feedback",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="government">
                {() => (
                  <Stack.Navigator
                    initialRouteName="state-screen"
                    screenOptions={{ headerShown: false }}
                  >
                    <Stack.Screen
                      name="state-screen"
                      component={StateScreen}
                      screenOptions={{ headerShown: true }}
                      options={{
                        title: "state-screen",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                    <Stack.Screen
                      name="executive-details"
                      component={ExecutiveDetailsScreen}
                      // screenOptions={{ headerShown: true }}
                      options={{
                        title: "executive-details",
                        headerTitleStyle: {
                          fontFamily: "Prompt_700Bold",
                        },
                      }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen name="agencies">
                {() => (
                  <Stack.Navigator
                    initialRouteName="federal-agencies"
                    screenOptions={{ headerShown: false }}
                  >
                    <Stack.Screen
                      name="federal-agencies"
                      component={AgenciesScreen}
                      screenOptions={{ headerShown: false }}
                      // options={{
                      //   title: "state-screen",
                      //   headerTitleStyle: {
                      //     fontFamily: "Prompt_700Bold",
                      //   },
                      // }}
                    />
                    <Stack.Screen
                      name="agency-details"
                      component={AgencyDetailsScreen}
                      screenOptions={{ headerShown: false }}
                      // options={{
                      //   title: "agency-details",
                      //   headerTitleStyle: {
                      //     fontFamily: "Prompt_700Bold",
                      //   },
                      // }}
                    />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </NotificationsProvider>
    </GestureHandlerRootView>
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
