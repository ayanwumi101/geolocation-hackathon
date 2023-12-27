import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

const EmergenciesList = ({route, navigation}) => {
  const emergencies = route?.params;
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.emergency_heading_text}>{emergencies?.emergencies?.title}</Text>
        </View>
        
        <ScrollView>
            <View>
                {emergencies?.emergencies?.emergencies?.map((emergency, index) => <SingleEmergency key={index} item={emergency} navigation={navigation} />)}
            </View>
        </ScrollView>
    </View>
  )
}

export default EmergenciesList

export const SingleEmergency = ({item, navigation}) => {
    return (
            <View style={styles.single_emergency}>
                <TouchableOpacity onPress={() => navigation.navigate('emergencies', {
                    screen: "emergency-details",
                    params: { emergency: item}
                })}>
                  <Text style={styles.emergencyKey}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
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
    },
    emergencyKey: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        color: 'black',
        paddingVertical: 25,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
})