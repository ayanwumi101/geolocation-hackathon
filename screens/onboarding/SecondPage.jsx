import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";
import { OutlineButton, SolidButton, TextButton } from '../../components/button';
import { TextMedium, TextRegular } from '../../components/text';

const SecondPage = ({ navigation }) => {

    return (
        <View style={styles.column}>
            <ImageBackground style={styles.container} imageStyle={styles.bgCover} source={require('../../assets/second-screen.png')}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.skipButtonContainer} onPress={() => navigation.navigate('HomeTabNavigator')}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <TextMedium style={styles.onboardingHeadingText}>Find the contact details of your governmental offices</TextMedium>
                    <TextRegular style={styles.text}>
                        Quickly access contact information for your governmental offices. Do you need to reach out for inquiries, services, or assistance? it is now simple to connect with the right officials and offices.
                    </TextRegular>
                </View>

                <View style={StyleSheet.compose(styles.buttonsRow, styles.buttonsContainer)}>
                    <OutlineButton
                        containerProps={{
                            onPress: () => navigation.goBack(),
                        }}
                    >RETURN</OutlineButton>
                    <SolidButton
                        containerProps={{
                            onPress: () => navigation.navigate("onboarding-3"),
                        }}
                    >NEXT</SolidButton>
                </View>

                <View style={styles.signUpTexts}>
                    <Text style={styles.hurry}>Not in a hurry?</Text>
                    <TextButton
                        containerProps={{
                            onPress: () => navigation.navigate('more'),
                        }}
                    >
                        SIGN UP
                    </TextButton>
                </View>
            </ScrollView>
        </View>
    )
}

export default SecondPage
