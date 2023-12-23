import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

const EmergenciesList = ({route, navigation}) => {
  const emergencies = route?.params;
  return (
    <View style={styles.container}>
        <View style={styles.emergency_heading}>
            <Text style={styles.emergency_heading_text}>{emergencies?.emergencies?.title}</Text>
        </View>
        
        <ScrollView>
            <View>
                {emergencies?.emergencies?.emergencies?.map((emergency, index) => <SingleEmergency key={index} item={emergency} />)}
            </View>
        </ScrollView>
    </View>
  )
}

export default EmergenciesList

export const SingleEmergency = ({item}) => {
    const keys = Object.keys(item);
    return (
            <View style={styles.single_emergency}>
                {keys.map((key, index) => (
                    <TouchableOpacity>
                    <Text key={index} style={styles.emergencyKey}>
                        {key}
                    </Text>
                    </TouchableOpacity>
                ))}
            </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    emergency_heading_text: {
        fontSize: 20,
        fontFamily: 'Prompt_500Medium',
        color: 'black',
    },
    single_emergency: {
        width: '100%',
        paddingVertical: 20,
    },
    emergencyKey: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        color: 'black',
        paddingVertical: 25,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
})