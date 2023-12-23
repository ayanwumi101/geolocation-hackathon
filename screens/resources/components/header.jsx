import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const Header = ({position, setPosition}) => {
  const tabs = ['Emergency', 'Government', 'Agencies'];
  return (
    <View style={styles.container}>
      <View style={styles.tabs_container}>
        {tabs.map((tab, index) => (
            <TouchableOpacity key={index} onPress={() => setPosition(index)} style={index === position ? { borderBottomColor: '#19686A', borderBottomWidth: 3, paddingVertical: 10, width: '30%' } : { paddingVertical: 10, width: '30%' }} >
                <View>
                    <Text key={index} style={index === position ? { color: '#19686A', fontSize: 17, fontWeight: '500', textAlign: 'center' } : { color: '#939094', fontSize: 17, fontWeight: '500', textAlign: 'center' }}>{tab}</Text>
                </View>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        marginBottom: 15,
    },
    tabs_container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tabs_text: {
        fontSize: 15,
        // fontFamily: 'Prompt_400Regular',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})