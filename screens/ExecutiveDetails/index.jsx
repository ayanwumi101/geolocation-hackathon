import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import Contact from '../contactDetails/screens/Contact'
import pdp from '../../assets/pdp.png'

const Index = ({navigation, route}) => {
  const {image, heading, description} = route.params;
  return (
    <View style={styles.container}>
        <View style={styles.backgroundContainer}>
              <ImageBackground source={image} style={styles.image} resizeMode='cover' imageStyle={{
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
}}>
              <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBg}>
                    <MaterialIcons name='chevron-left' color='#19686A' size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBg}>
                    <MaterialIcons name='share' color='#19686A' size={25} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.titles}>
                    <Text style={styles.name}>{heading}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                
                <View>
                    <Text style={styles.party}>Political Party</Text>
                    <View style={styles.partyContainer}>
                        <Image source={pdp} resizeMode='cover' />
                        <Text style={styles.partyText}>People's Democratic Party (PDP)</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.party}>Political Summary</Text>
                    <Text style={styles.text}>
                          He was elected Governor of Oyo State on March 10, 2019. Since then, Seyi continues to fervently pursue policies that will turn around the economic fortunes of the people of Oyo State and reinstate it in its position as the Pacesetter State.
                    </Text>
                    <Text style={styles.text}>
                          His Roadmap for Accelerated Development in Oyo State rests on four pillars: Education, Healthcare, Security and the use of Agribusiness to drive the Economy. He is determined to run an inclusive government, and maintain an effective feedback system, so he remains apprised of all governance challenges facing the people of Oyo State.
                    </Text>
                    <Text style={styles.text}>
                        Seyi remains committed to using his office as Governor of Oyo State, to bring about development that will outlast his tenure and be used as a benchmark for good governance in Oyo State and Nigeria.
                    </Text>
                </View>
            </View>

            
            <View style={styles.icons_list}>
                <ActionIcons icon='directions' text='Directions' />
                <ActionIcons icon='call' text='Call Office' />
                <ActionIcons icon='archive' text='Save' />
                <ActionIcons icon='email' text='Send and email' />
            </View>
            <View style={styles.contactContainer}>
                <Contact />
            </View>
        </ScrollView>
       
    </View>
  )
}

export default Index

const ActionIcons = ({ icon, text }) => {
    return (
        <View style={styles.action_icon_container}>
            <View style={styles.icon_container}>
                <MaterialIcons name={icon} color='#19686A' size={25} />
            </View>
            <Text style={styles.label}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 30,
    },
    backgroundContainer: {
        width: '100%',
        height: 310,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 45,
    },
    iconBg: {
        backgroundColor: 'white',
        borderRadius: 50,
        // padding: 10,
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
    },
    titles: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Prompt_500Medium',
        color: '#313033'
    },
    description: {
        fontSize: 15,
        fontFamily: 'Prompt_400Regular',
        color: '#787579',
    },
    party: {
        fontSize: 17,
        color: '#787579',
        marginBottom: 7,
        fontFamily: 'Prompt_400Regular',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        marginBottom: 12,
        color: '#313033'
    },
    icons_list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        paddingHorizontal: 25,
        marginTop: 20,
    },
    action_icon_container: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon_container: {
        width: 48,
        height: 48,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#19686A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Prompt_400Regular',
        fontSize: 14,
        color: '#484649',
        marginTop: 10,
        textAlign: 'center',
    },
    contactContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    partyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    partyText: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        color: '#313033'
    }
})