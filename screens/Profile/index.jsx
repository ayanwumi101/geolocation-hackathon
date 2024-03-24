import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, Octicons } from 'react-native-vector-icons'
import { data } from '../../data'
import { Notification } from '../../components/Notification'


const Index = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.moreContainer}>
                <View style={styles.icon_text}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Octicons name='chevron-left' size={30} color='#19686A' /></TouchableOpacity>
                    <Text style={styles.more}>Your Account</Text>
                </View>
                <MaterialIcons name='edit' size={25} color='#19686A' />
            </View>
            
                <View style={styles.content_container}>
                    <View style={styles.image_container}>
                        <Image source={require('../../assets/ava.png')} style={styles.image} />
                        <Text style={styles.username}>Ayanwumi Abdulroheem Babatunde</Text>
                        <Text style={styles.email}>olawuwoabeeb@gmail.com</Text>
                    </View>
                    <View style={styles.location_container}>
                        <MaterialIcons name='location-on' size={25} color='#19686A' />
                        <Text style={styles.location_text}>Independence hall, University of Ibadan, Ibadan. </Text>
                    </View>

                    <Text style={styles.announcement_text}>Recent Announcements</Text>
                    <ScrollView>
                        <View style={styles.announcement_container}>
                            <View style={styles.announcements}>
                                {data.map((item, index) => <Notification item={item} navigation={navigation} key={index} />)}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        backgroundColor: 'white'
    },
    more: {
        fontSize: 25,
        fontFamily: 'Prompt_500Medium',
        color: '#484649',
    },
    moreContainer: {
        borderBottomWidth: 1,
        borderColor: '#19686A',
        bordeerBottomStyle: 'solid',
        paddingHorizontal: 25,
        paddingBottom: 10,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon_text: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 35,
    },
    content_container: {
        // paddingHorizontal: 20
    },
    image_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        width: 160,
        height: 170,
        borderRadius: 8,
        marginBottom: 20,
    },
    username: {
        fontSize: 19,
        fontFamily: 'Prompt_500Medium',
        color: '#313033'
    },
    email: {
        fontSize: 18,
        color: '#787579',
        fontFamily: 'Prompt_400Regular'
    },
    location_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginBottom: 30,
    },
    location_text: {
        fontFamily: 'Prompt_500Medium',
        fontSize: 19,
        color: '#484649',
        borderBottomColor: '#939094',
        borderBottomWidth: 1,
        paddingBottom: 7,
    },
    announcement_container: {
        paddingBottom: 100,
    },
    announcement_text: {
        fontSize: 17,
        fontFamily: 'Prompt_500Medium',
        color: '#313033',
        marginBottom: 10,
        paddingHorizontal: 30,
    },
    announcements: {
        display: 'flex',
        flexDirection: 'column',
    }
})