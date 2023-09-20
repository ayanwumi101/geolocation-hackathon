import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";
import { OutlineButton, SolidButton, TextButton } from '../../components/button';
import { TextMedium, TextRegular } from '../../components/text';

const ThirdPage = ({ navigation }) => {

    return (
        <View style={styles.column}>
            <ImageBackground style={styles.container} imageStyle={styles.bgCover} source={require('../../assets/third-screen.png')}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.skipButtonContainer}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <TextMedium style={styles.onboardingHeadingText}>Easily find information on all governmental agencies.</TextMedium>
                    <TextRegular style={styles.text}>
                        Effortlessly Access Comprehensive Government Agency Information! Our platform provides a convenient and user-friendly way to discover details about all governmental agencies.
                    </TextRegular>
                </View>

                <View style={StyleSheet.compose(styles.buttonsRow, styles.buttonsContainer)}>
                    <OutlineButton
                        containerProps={{
                            onPress: () => navigation.goBack(),
                        }}
                    >RETURN</OutlineButton>
                    <SolidButton containerProps={{
                        onPress: () => navigation.navigate('HomeTabNavigator')
                    }}>GET STARTED</SolidButton>
                </View>

                <View style={styles.signUpTexts}>
                    <Text style={styles.hurry}>Not in a hurry?</Text>
                    <TextButton>SIGN UP</TextButton>
                </View>
            </ScrollView>
        </View>
    )
}

export default ThirdPage
