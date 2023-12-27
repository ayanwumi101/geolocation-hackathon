import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.texts_container}>
            <Text style={styles.title}>University Health Services</Text>
            <Text style={styles.description}>University of Ibadan, Ibadan.</Text>
        </View>
        <View>
            <Image 
                source={require('../../../assets/university.png')}
                style={styles.image}
            />
        </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        // padding: 20
    },
    title: {
        fontSize: 19,
        fontFamily: 'Prompt_500Medium'
    },
    description: {
        fontFamily: 'Prompt_400Regular',
        fontSize: 14,
        color: '#787579'
    },
    texts_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 3,
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        objectFit: 'cover'
    }
})