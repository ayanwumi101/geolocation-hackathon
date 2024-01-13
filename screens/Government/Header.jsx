import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    const tiers = [
        {
            image: require('../../assets/presidency.png'),
            title: 'Presidency'
        },
        {
            image: require('../../assets/senate.png'),
            title: 'The Senate'
        },
        {
            image: require('../../assets/hor.png'),
            title: 'The HOR'
        },
        {
            image: require('../../assets/local.png'),
            title: 'LGAs'
        }
    ]
  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Abuja</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View style={styles.cardsContainer}>
            {tiers.map((item, index) => <Cards key={index} title={item.title} image={item.image} />)}
         </View>
      </ScrollView>
    </View>
  )
}

export default Header

export const Cards = ({title, image}) => {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image 
                    source={image} 
                    style={styles.image}
                    resizeMode="cover"

                />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap:15,
    }, 
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 'auto',
        borderRadius: 10,
    },
    image: {
        width: 70,
        height: 70,
        objectFit: 'cover',
        marginBottom: 7,
    },
    cardTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
    },
    headingTextContainer: {
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        paddingBottom: 10,
    },
    headingText: {
        fontSize: 20,
        fontFamily: 'Prompt_500Medium',
    }
})