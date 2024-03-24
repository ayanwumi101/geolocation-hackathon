import { StyleSheet, Text, View, TextInput, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseAuth } from '../../firebaseConfig';
import { useNotifications, ZoomInDownZoomOutUp } from 'react-native-notificated';
import {AntDesign} from 'react-native-vector-icons'


const Index = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebaseAuth;
    const {notify} = useNotifications()

    const SigninUser = async () => {
        if(email && password){
            setLoading(true);
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                if (response) {
                    notify('success', {
                        params: {
                            title: 'Login Successful',
                            description: 'You have successfully logged in',
                        },
                        config: {
                            animationConfig: ZoomInDownZoomOutUp,
                            notificationPosition: 'top',
                            notificationWidth: '100%',
                        }
                    });
                    navigation.navigate('profile-screen');
                    setLoading(false);
                }
            } catch (error) {
                notify('error', {
                    params: {
                        title: 'Error!',
                        description: error.message,
                    },
                    config: {
                        animationConfig: ZoomInDownZoomOutUp,
                        notificationPosition: 'top',
                        notificationWidth: '100%',
                    }
                });
                setLoading(false);
            }
        }else{
            notify('error', {
                params: {
                    title: 'Error!',
                    description: 'Please fill all fields',
                },
                config: {
                    animationConfig: ZoomInDownZoomOutUp,
                    notificationPosition: 'top',
                    notificationWidth: '100%',
                }
            });
        }
    }

    return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.sub_container}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.HeadingText}>Sign In</Text>
                            <Text style={styles.description}>Welcome back to Qcall, please signin to continue announcing emmergency.</Text>
                        </View>
                        <View style={styles.form_container}>
                            <View>
                                <LabelText text='Email Address' />
                                <TextInput placeholder='Input your email' autoCapitalize='none' keyboardType='email-address' style={styles.input} value={email} onChangeText={(val) => setEmail(val)} />
                            </View>
                            <View>
                                <LabelText text='Password' />
                                <TextInput placeholder='Input your password' style={styles.input} secureTextEntry={true} keyboardType='numeric' value={password} onChangeText={(val) => setPassword(val)} />
                            </View>
                        </View>

                        <View style={styles.inputContainer}>
                            <TouchableOpacity onPress={SigninUser}>
                                <View style={styles.solidButton}>
                                    {
                                        loading ? <ActivityIndicator color='white' /> 
                                        : 
                                        <View style={{display: 'flex', alignItems: 'center', gap: 10, flexDirection: 'row', justifyContent: 'center'}}>
                                            <Text style={styles.buttonText}>SIGN IN</Text>
                                            <AntDesign name='login' size={18} color='white' />
                                        </View>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <TouchableOpacity>
                                <View style={styles.outlineButton}>
                                    <Image source={require('../../assets/google-image.png')} />
                                    <Text style={styles.outlineButtonText}>SIGNIN WITH GOOGLE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
    )
}

export default Index

export const LabelText = ({ text }) => {
    return (
        <View style={styles.label_text_container}>
            <Text style={styles.label_text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sub_container: {
        marginTop: 100,
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        marginBottom: 40,
    },
    HeadingText: {
        fontSize: 40,
        fontFamily: 'Prompt_700Bold',
        color: '#19686A',
        textAlign: 'center'
    },
    description: {
        fontSize: 20,
        lineHeight: 33,
        textAlign: 'center',
        fontFamily: 'Prompt_400Regular'
    },
    form_container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        marginBottom: 30,
    },
    label_text: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular'
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
    inputContainer: {
        marginBottom: 19,
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
})