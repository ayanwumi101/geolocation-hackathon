import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Prompt_400Regular } from "@expo-google-fonts/prompt";
import FirstPage from './screens/onboarding/FirstPage';
import SecondPage from './screens/onboarding/SecondPage';
import ThirdPage from './screens/onboarding/ThirdPage';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FirstPage />
        {/* <SecondPage />
        <ThirdPage /> */}
      </SafeAreaView>
    </View>
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
