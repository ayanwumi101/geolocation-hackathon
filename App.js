import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Prompt_400Regular } from "@expo-google-fonts/prompt";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './Navigation';
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "./screens/onboarding/FirstPage";
import SecondPage from "./screens/onboarding/SecondPage";
import ThirdPage from "./screens/onboarding/ThirdPage";


const Stack = createStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="FirstPage" 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

export default function App() {

  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
