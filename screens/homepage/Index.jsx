import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Index = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>The Map displays here on the Homepage</Text>
    </View>
  )
}

export default Index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Prompt_400Regular',
    color: '#19686A',
    textAlign: 'center',
  }
})