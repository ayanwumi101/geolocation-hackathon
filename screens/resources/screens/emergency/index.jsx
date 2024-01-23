import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons'
import { emergenciesList } from '../../../../data'



const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_text_container}>
        <Text style={styles.title}>
            Should in case you witnessed an emergency, what would be your next line of action?
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notificationsContainer}>
          {emergenciesList.map((item, index) => <SingleEmergency key={index} item={item} navigation={navigation} />)}
          {/* <FlatList
            data={emergenciesList}
            renderItem={({ item }) => <SingleEmergency item={item} />}
            keyExtractor={(item) => item.id}
          /> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default index


export const SingleEmergency = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('emergencies', {
          screen: "emergencies-list",
          params: { emergencies: item }
        })
      }}
      >
      <View style={styles.notificationContainer}>
        <View style={styles.firstColumn}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: item.title === 'Electrical Hazards'
                  ? '#B5DB96' : item.title === 'Fire' ? '#EED9C6'
                    : item.title === 'Automobile Accident' ? '#CFB3E4' : item.title === 'Police emergencies' ? '#CFE6F2'
                      : item.title === 'Environmental Hazards' ? '#B6F4BC'
                      : '#F9D8D6'
              }
            ]}
          >
            {
              item.title === 'Electrical Hazards' ?
                <MaterialIcons name='bolt' size={23} color='#47900D' />
                : item.title === 'Fire' ?
                  <MaterialIcons name='local-fire-department' color='#C77E3C' size={23} />
                  : item.title === 'Police emergencies' ?
                    <Entypo name='shield' color='#3C95C7' size={23} />
                    : item.title === 'Automobile Accident' ?
                    <MaterialIcons name='taxi-alert' color='#8033BC' size={23} />
                    :
                    item.title === 'Environmental Hazards' ? 
                    <MaterialCommunityIcons name='leaf' color='#19686A' size={23} />
                    :
                    <FontAwesome name='plus' color='#C7443C' size={23} />
            }
          </View>
          <View style={styles.description}>
            <Text style={styles.alertTitle}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 40,
    },
    title_text_container: {
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
        color: '#313033',
    },  
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 130,
    height: '100%',
    marginBottom: 40,
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    // paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E1E5',
    borderBottomStyle: 'solid',
  },
  firstColumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 45,
    height: 45,
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
