import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Prompt_400Regular } from "@expo-google-fonts/prompt";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> f8de5880440d9d70c5ab0f1dfbeebdfdcc56b983
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
