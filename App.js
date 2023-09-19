import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Prompt_400Regular, Prompt_500Medium, Prompt_700Bold } from "@expo-google-fonts/prompt";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './screens/onboarding/FirstPage';
import ThirdPage from './screens/onboarding/ThirdPage';
import SecondPage from './screens/onboarding/SecondPage';


const Stack = createNativeStackNavigator()

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
        <Stack.Navigator initialRouteName='onboarding-1'>
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
