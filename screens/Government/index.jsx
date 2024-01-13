import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import States from './States/States'


const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header navigation={navigation} />
            <States navigation={navigation} />
        </ScrollView>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})