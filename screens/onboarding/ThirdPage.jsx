import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

const ThirdPage = ({navigation}) => {

    const goToNextPage = () => {
        navigation.navigate('ThirdPage');
    };

    const goToPreviousPage = () => {
        navigation.navigate('SecondPage');
    };

  return (
      <View>
          <View style={styles.container}>
              <Image source={require('../../assets/third-screen.png')} style={styles.image} />
          </View>

          <View style={styles.textContainer}>
              <Text style={styles.onboardingHeadingText}>
                  Easily find information on all governmental agencies. 
              </Text>
              <Text style={styles.text}>
                  Effortlessly Access Comprehensive Government Agency Information! Our platform provides a convenient and user-friendly way to discover details about all governmental agencies.
              </Text>
          </View>

          <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={goToPreviousPage}>
                  <View style={styles.outlineButtonContainer}>
                      <Text style={styles.outlineButtonText}>RETURN</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>GET STARTED</Text>
                  </View>
              </TouchableOpacity>
          </View>

          <View style={styles.signUpTexts}>
              <Text style={styles.hurry}>Not in a hurry?</Text>
              <Text style={styles.signUp}>SIGN UP</Text>
          </View>
      </View>
  )
}

export default ThirdPage


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        marginBottom: 15,
    },
    image: {
        height: 500,
    },
    textContainer: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    onboardingHeadingText: {
        fontSize: 23,
        marginBottom: 10,
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: 'Prompt_400Regular',
    },
    buttonsContainer: {
        width: 320,
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    buttonContainer: {
        width: 152,
        paddingHorizontal: 20,
        backgroundColor: '#19686A',
        paddingVertical: 12,
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Prompt_400Regular',
    },
    outlineButtonContainer: {
        width: 152,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#19686A',
        borderStyle: 'solid',
    },
    outlineButtonText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
    signUpTexts: {
        textAlign: 'center',
        fontSize: 18,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    hurry: {
        fontFamily: 'Prompt_400Regular',
    },
    signUp: {
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
})