import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialIcons } from '@expo/vector-icons'
import { OutlineButton, SolidButton, TextButton } from '../../../components/button'

const Signup = () => {

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    };

  return (
    <View style={styles.container}>
        
        <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput placeholder='Surname first' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput placeholder='user@gmail.com' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
              <Text style={styles.label}>Home Address</Text>
              <TextInput placeholder='your home address' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
              <Text style={styles.label}>Your photo</Text>
              <View style={styles.imageContainer}>
                  <TouchableOpacity onPress={pickImageAsync}>
                    <View>
                        <MaterialIcons name='add-a-photo' color='#AEAAAE' size={35} style={styles.icon} />
                        <Text style={styles.text}>Open camera or upload a photo</Text>
                    </View>
                  </TouchableOpacity>
              </View>
        </View>
        
        <View style={styles.inputContainer}>
            <TouchableOpacity>
               <View style={styles.solidButton}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
               </View>
            </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
            <TouchableOpacity>
                <View style={styles.outlineButton}>
                    <Text style={styles.outlineButtonText}>CONTINUE WITH GOOGLE</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
            <TouchableOpacity>
                <View>
                    <Text style={styles.outlineButtonText}>SIGN IN INSTEAD</Text>
                </View>
            </TouchableOpacity>
        </View>

          <View style={styles.signUpTexts}>
              <Text style={styles.hurry}>Have you read and understood our</Text>
              <TextButton>Privacy Policy?</TextButton>
          </View>
    </View>
  )
}

export default Signup


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    inputContainer: {
        marginBottom: 19,
    },
    label: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Prompt_400Regular',
    },
    input: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        width: '100%',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        borderColor: '#AEAAAE',
        fontSize: 17,
        // fontWeight: '700',
        letterSpacing: 0.8,
        fontFamily: 'Prompt_400Regular',
    },
    imageContainer: {
        width: '100%',
        height: 130,
        borderColor: '#AEAAAE',
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },   
    text: {
        fontSize: 17,
        color: '#AEAAAE',
        textAlign: 'center',
        fontFamily: 'Prompt_400Regular',
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
    },
    outlineButtonText: {
        fontSize: 15,
        color: '#19686A',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
    },
    icon: {
        marginBottom: 5,
        textAlign: 'center',
    },
    solidButton: {
        backgroundColor: '#19686A',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    outlineButton: {
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: '#19686A',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    signUpTexts: {
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    hurry: {
        fontFamily: 'Prompt_400Regular',
    },
    textContainer: {

    }
})