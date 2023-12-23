import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'

const NotificationDetails = ({route}) => {
  const {details} = route.params;
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.detail_container}>
        <Text style={styles.title}>Type of Emergency</Text>
        <Text style={styles.description}>{details.title}</Text>
      </View>
      <View style={styles.detail_container}>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.description}>{details.address}</Text>
      </View>
      <View style={styles.detail_container}>
        <Text style={styles.title}>Time of report</Text>
        <View style={styles.time_container}>
          <Text style={styles.description}>{details.time}</Text>
          <View style={styles.divider}></View>
          <Text style={styles.description}>{details.date}</Text>
        </View>
      </View>
      <View style={styles.detail_container}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>{details.title}</Text>
      </View>
      <View style={styles.detail_container}>
        <Text style={styles.title}>Images</Text>
        <View style={styles.image_container}>
          {details.images.map((image, index) => <Image key={index} style={styles.image} source={image} />)}
        </View>
      </View>
    </View>
  </ScrollView>
  )
}

export default NotificationDetails

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    detail_container: {
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: 25,
    },
    title: {
      fontFamily: 'Prompt_500Medium',
      fontSize: 14,
      color: '#19686A',
      marginBottom: 7,
      letterSpacing: .3,
    },
    description: {
      fontFamily: 'Prompt_400Regular',
      fontSize: 17,
      color: '#484649',
      letterSpacing: .3,
    },
    image_container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      marginBottom: 15,
    },
    time_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    divider: {
      width: 2.5,
      height: '100%',
      backgroundColor: 'gray',
      marginHorizontal: 10,
    }
})