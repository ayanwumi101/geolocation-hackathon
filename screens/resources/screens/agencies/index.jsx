import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const index = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Agencies in Nigeria, both private and public
                </Text>
            </View>
            <View>
                <Text>Other things goes here</Text>
            </View>
        </View>
    )
}

export default index


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
})
