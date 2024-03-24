import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { data } from '../../data'
import { Notification } from '../../components/Notification'

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.moreContainer}>
        <Text style={styles.more}>Notifications</Text>
        <MaterialIcons name='settings' color='#484649' size={27} />
      </View>

      <View style={styles.notificationsContainer}>
        <ScrollView>
          {data.map((item, index) => <Notification item={item} navigation={navigation} key={index} />)}
        </ScrollView>
      </View>
    </View>
  )
}
export default Notifications


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 55,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Prompt_400Regular',
    color: '#19686A',
    textAlign: 'center',
  },
  more: {
    fontSize: 25,
    fontFamily: 'Prompt_500Medium',
    color: '#484649',
    marginBottom: 10,
  },
  moreContainer: {
    borderBottomWidth: 1,
    borderColor: '#19686A',
    bordeerBottomStyle: 'solid',
    paddingHorizontal: 25,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E1E5',
    borderBottomStyle: 'solid',
  },
  firstColumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {

  },
  alertTitle: {
    // marginBottom: 5,
    fontFamily: 'Prompt_400Regular',
    fontSize: 18,

  },
  alertDescription: {
    fontFamily: 'Prompt_400Regular',
    fontSize: 12.5,
    color: '#939094'
  },
  time: {
    fontFamily: 'Prompt_400Regular',
    color: '#787579',
    fontSize: 14,
  }
})