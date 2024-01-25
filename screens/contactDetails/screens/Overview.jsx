import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { images } from '../../../data'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import {MaterialIcons} from '@expo/vector-icons'

const Overview = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} contentContainerStyle={{backgroundColor: 'white'}}>
                <View style={styles.images_container}>
                    {images.map((image, index) => <OverviewImage image={image} key={index} />)}
                </View>
            </ScrollView>
            <View style={styles.icons_list}>
                <ActionIcons icon='directions' text='Directions' />
                <ActionIcons icon='call' text='Call' />
                <ActionIcons icon='archive' text='Save' />
                <ActionIcons icon='share' text='Share' />
            </View>
        </View>
    )
}

export default Overview

export const OverviewImage = ({image}) => {
    return (
          <View style={styles.image_container}>
            <Image style={styles.image} source={image} />
          </View>
    )
}

export const ActionIcons = ({icon, text}) => {
    return (
        <View style={styles.action_icon_container}>
            <View style={styles.icon_container}>
                <MaterialIcons name={icon} color='#19686A' size={23} /> 
            </View>
            <Text style={styles.label}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: '100%',
    },
    images_container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        overflow: 'auto',
        alignItems: 'center',
        marginBottom: 20,
    },
    image_container: {
        width: 280,
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        objectFit: 'cover',
    },
    icons_list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    action_icon_container: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon_container: {
        width: 46,
        height: 46,
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
    } 
})