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
    )
}

export default FirstPage
