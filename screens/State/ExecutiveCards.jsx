import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ExecutiveCards = ({navigation}) => {

  const executives = [
    {
      image: require('../../assets/seyi.png'),
      heading: 'His Excellency, Oluseyi A. Makinde',
      description: 'Executive Governor of Oyo State'
    },
    {
      image: require('../../assets/ava.png'),
      heading: 'His Excellency, Oluseyi A. Makinde',
      description: 'Executive Governor of Oyo State'
    },
    {
      image: require('../../assets/lawal.png'),
      heading: 'Barrister Adebayo Lawal',
      description: 'Deputy Governor of Oyo State'
    }, 
    {
      image: require('../../assets/senator.png'),
      heading: 'Senator Teslim Folarin',
      description: 'Senator representing Oyo Central'
    },
    {
      image: require('../../assets/seyi.png'),
      heading: 'His Excellency, Oluseyi A. Makinde',
      description: 'Executive Governor of Oyo State'
    },
    {
      image: require('../../assets/lawal.png'),
      heading: 'Barrister Adebayo Lawal',
      description: 'Deputy Governor of Oyo State'
    },
    {
      image: require('../../assets/senator.png'),
      heading: 'Senator Teslim Folarin',
      description: 'Senator representing Oyo Central'
    },
    {
      image: require('../../assets/seyi.png'),
      heading: 'His Excellency, Oluseyi A. Makinde',
      description: 'Executive Governor of Oyo State'
    },
    {
      image: require('../../assets/lawal.png'),
      heading: 'Barrister Adebayo Lawal',
      description: 'Deputy Governor of Oyo State'
    },
    {
      image: require('../../assets/senator.png'),
      heading: 'Senator Teslim Folarin',
      description: 'Senator representing Oyo Central'
    }
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {executives.map((item, index) => <ExecutiveCard key={index} image={item.image} heading={item.heading} description={item.description} navigation={navigation} item={item} />)}
      </View>
    </ScrollView>
  )
}

export default ExecutiveCards


const ExecutiveCard = ({image, heading, description, navigation, item}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('government', {
      screen: "executive-details",
      params: { image: image, heading: heading, description: description }
    })}>
    <View style={styles.cardContainer}>
      <ImageBackground source={image} resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{heading}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  cardContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  headingText: {
    fontSize: 20,
    fontFamily: 'Prompt_500Medium',
    color: 'white',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    color: 'white',
  }
})