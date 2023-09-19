import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";
import { SolidButton } from '../../components/button';

const FirstPage = ({ navigation }) => {

    return (
        <View style={styles.column}>
            <ImageBackground style={styles.container} imageStyle={styles.bgCover} source={require('../../assets/emergency.png')}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.skipButtonContainer}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.onboardingHeadingText}>Contact the Nearest Emergency station. </Text>
                    <Text style={styles.text}>
                        Welcome to Q-call where you effortlessly connect with the nearest emergency station.
                        With just a few taps, you can ensure swift and immediate assistance whenever you need it.
                    </Text>
                </View>
                <SolidButton containerProps={{
                    style: styles.buttonsContainer,
                    onPress: () => navigation.navigate("onboarding-2"),
                }}
                >Continue</SolidButton>

                <View style={styles.signUpTexts}>
                    <Text style={styles.hurry}>Not in a hurry?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUp}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
<<<<<<< HEAD
    )
}

export default FirstPage
=======
        
        <View style={styles.textContainer}>
              <Text style={styles.onboardingHeadingText}>Contact the Nearest Emergency station. </Text>
            <Text style={styles.text}>
                  Welcome to Q-call where you effortlessly connect with the nearest emergency station.
                  With just a few taps, you can ensure swift and immediate assistance whenever you need it.
            </Text>
        </View>

        <TouchableOpacity onPress={goToNextPage}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.signUpTexts}>
            <Text style={styles.hurry}>Not in a hurry?</Text>
            <Text style={styles.signUp}>SIGN UP</Text>
        </View>
    </View>
  )
}

export default FirstPage


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
        marginBottom: 15,
    },
    onboardingHeadingText: {
        fontSize: 23,
        marginBottom: 10,
        color: '#19686A',
        fontFamily: 'Prompt_400Regular',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 25,
        fontFamily: 'Prompt_400Regular',
    },
    buttonContainer: {
        width: 320,
        paddingHorizontal: 20,
        backgroundColor: '#19686A',
        paddingVertical: 12,
        borderRadius: 4,
        marginLeft: 20,
        marginBottom: 15,
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
>>>>>>> f8de5880440d9d70c5ab0f1dfbeebdfdcc56b983
