import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";
import { OutlineButton, SolidButton } from '../../components/button';

const SecondPage = ({navigation}) => {

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
                    <Text style={styles.onboardingHeadingText}>Find the contact details of your governmental offices</Text>
                    <Text style={styles.text}>
                        Quickly access contact information for your governmental offices. Do you need to reach out for inquiries, services, or assistance? it is now simple to connect with the right officials and offices.
                    </Text>
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
                    <TouchableOpacity>
                        <Text style={styles.signUp}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SecondPage