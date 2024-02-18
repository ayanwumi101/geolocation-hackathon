import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
// import {SearchNormal} from 'iconsax-react-native'

const Index = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Search agency name'
        style={styles.input}
      />
      {/* <SearchNormal color='#AEAAAE' /> */}
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 11,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#AEAAAE',
        borderRadius: 30,
        justifyContent: 'space-between'
    },
    input: {
      fontFamily: 'Prompt_400Regular',
      color: '#AEAAAE',
      fontSize: 16,
      width: '90%',
    }
})