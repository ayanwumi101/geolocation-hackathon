import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

const SecondPage = ({navigation}) => {
    const goToNextPage = () => {
        navigation.navigate('ThirdPage');
    };

    const goToPreviousPage = () => {
        navigation.navigate('FirstPage');
    };

  return (
        <View>
            <View style={styles.container}>
                <Image source={require('../../assets/second-screen.png')} style={styles.image} />
                <TouchableOpacity>
                    <View style={styles.skipButtonContainer}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.onboardingHeadingText}>
                  Find the contact details of your governmental offices
                </Text>
                <Text style={styles.text}>
                  Quickly access contact information for your governmental offices. Do you need to reach out for inquiries, services, or assistance? it is now simple to connect with the right officials and offices. 
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={goToPreviousPage}>
                  <View style={styles.outlineButtonContainer}>
                      <Text style={styles.outlineButtonText}>RETURN</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={goToNextPage}>
                  <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>NEXT</Text>
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

export default SecondPage


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        marginBottom: 15,
        position: 'relative',
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
    skipButtonContainer: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#19686A',
        borderStyle: 'solid',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 5,
        position: 'absolute',
        top: -440,
        right: 30,
    },
    skipButtonText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
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