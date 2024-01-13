import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Government from '../../../Government'

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Government navigation={navigation} />
        </View>
    )
}

export default Index


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
})
