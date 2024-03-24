import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialIcons } from '@expo/vector-icons'
import { OutlineButton, SolidButton, TextButton } from '../../../components/button'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import Toast from '../../../components/Toast'
import { firebaseAuth } from '../../../firebaseConfig'
import { ZoomInDownZoomOutUp, useNotifications } from 'react-native-notificated'
import { AntDesign } from 'react-native-vector-icons'



const Signup = ({navigation}) => {

    const { notify } = useNotifications();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(null);
    const auth = firebaseAuth;
    const [loading, setLoading] = useState(false);

    //initialise firebase firesore database
    const db = getFirestore();

    //initialise firebase storage
    const storage = getStorage();


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            Alert.alert("Success",`image ${result.assets[0].fileName} selected successfully`)
            setAvatar(result)
        } else {
            alert('You did not select any image.');
        }
    };

    const uploadImage = async (uri, image) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        const avatarRef = ref(storage, `Avatars/${image.user.uid}`);
        const uploadTask = uploadBytesResumable(avatarRef, blob);

        uploadTask.on('state_changed',
            (snapshot) => {
                
            },
            (error) => {
                // Handle unsuccessful upload
                notify('error', {
                    params: {
                        title: 'Error uploading image',
                        description: error,
                    },
                    config: {
                        animationConfig: ZoomInDownZoomOutUp,
                        notificationPosition: 'top',
                        notificationWidth: '100%',
                    }
                });
            },
            () => {
                // Handle successful upload
                notify('success', {
                    params: {
                        title: 'Success!',
                        description: 'Avatar uploaded successfully',
                    },
                    config: {
                        animationConfig: ZoomInDownZoomOutUp,
                        notificationPosition: 'top',
                        notificationWidth: '100%',
                    }
                });
            }
        );
    };


    const signUpUser = async () => {
        if (email && password && fullName && address && avatar) {
            setLoading(true);
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                //upload the user avatar to firebase storage 
                await uploadImage(avatar.assets[0].uri, response)

                //collection reference
                const colref = collection(db, 'users_data');

                //add user's details as a document to the user_data collection
                await addDoc(colref, {
                    fullName: fullName,
                    userId: response.user.uid,
                    homeAddress: address,
                }).then(() => {
                    notify('success', {
                        params: {
                            title: 'Success!',
                            description: 'Account created successfully',
                        },
                        config: {
                            animationConfig: ZoomInDownZoomOutUp,
                            notificationPosition: 'top',
                            notificationWidth: '100%',
                        }
                    });
                    signOut(auth);
                    setLoading(false);
                    setAddress('');
                    setEmail('');
                    setPassword('');
                    setFullName('');
                    setAvatar(null);
                    navigation.navigate('signin-screen');
                });
            } catch (error) {
                notify('error', {
                    params: {
                        title: 'Error',
                        description: error.message,

                    },
                    config: {
                        animationConfig: ZoomInDownZoomOutUp,
                        notificationPosition: 'top',
                        notificationWidth: '100%',
                    }
                })
            }
            setLoading(false);
        } else {
            notify('error', {
                params: {
                    title: 'Error',
                    description: 'Please fill all fields',

                },
                config: {
                    animationConfig: ZoomInDownZoomOutUp,
                    notificationPosition: 'top',
                    notificationWidth: '100%',
                }
            })
        }
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput placeholder='Surname first' style={styles.input} value={fullName} onChangeText={(val) => setFullName(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput placeholder='user@gmail.com' autoCapitalize='none' keyboardType='email-address' style={styles.input} value={email} onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput secureTextEntry={true} placeholder='*******' style={styles.input} value={password} onChangeText={(val) => setPassword(val)} keyboardType='numeric' />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Home Address</Text>
                    <TextInput placeholder='your home address' style={styles.input} value={address} onChangeText={(val) => setAddress(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Your photo</Text>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={pickImageAsync}>
                            {avatar !== null ? 
                                <View>
                                    {/* <Image source={{ uri: avatar?.assets[0].uri }} /> */}
                                    <Text>{avatar.assets[0].fileName}</Text>
                                </View>
                            : 
                                <View>
                                    <MaterialIcons name='add-a-photo' color='#AEAAAE' size={35} style={styles.icon} />
                                    <Text style={styles.text}>Open camera or upload a photo</Text>
                                </View>
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={signUpUser}>
                        <View style={styles.solidButton}>
                            {loading ? <ActivityIndicator color='white' /> : 
                                <View style={{ display: 'flex', alignItems: 'center', gap: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                    <AntDesign name='login' size={18} color='white' />
                                </View>
                            }
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity>
                        <View style={styles.outlineButton}>
                            <Image source={require('../../../assets/google-image.png')} />
                            <Text style={styles.outlineButtonText}>CONTINUE WITH GOOGLE</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('signin-screen')}>
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
        </ScrollView>
    )
}

export default Signup


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 30,
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
        paddingVertical: 10,
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
        fontFamily: 'Prompt_700Bold',
        letterSpacing: 0.5
    },
    outlineButtonText: {
        fontSize: 15,
        color: '#19686A',
        textAlign: 'center',
        fontFamily: 'Prompt_700Bold',
        letterSpacing: 0.5
    },
    icon: {
        marginBottom: 5,
        textAlign: 'center',
    },
    solidButton: {
        backgroundColor: '#19686A',
        paddingVertical: 15,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    outlineButton: {
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: '#19686A',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 18,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 10
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