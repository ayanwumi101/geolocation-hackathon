import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Contact from '../contactDetails/screens/Contact'



const Index = ({navigation, route}) => {
  const details = route.params.details;
  return (
    <View style={styles.container}>

      <View style={styles.moreContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='chevron-left' color='#19686A' size={38} />
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.more}>{details}</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View>
            <Text style={styles.party}>About {details}</Text>
            <Text style={styles.text}>
              He was elected Governor of Oyo State on March 10, 2019. Since then, Seyi continues to fervently pursue policies that will turn around the economic fortunes of the people of Oyo State and reinstate it in its position as the Pacesetter State.
            </Text>
            <Text style={styles.text}>
              His Roadmap for Accelerated Development in Oyo State rests on four pillars: Education, Healthcare, Security and the use of Agribusiness to drive the Economy. He is determined to run an inclusive government, and maintain an effective feedback system, so he remains apprised of all governance challenges facing the people of Oyo State.
            </Text>
            <Text style={styles.text}>
              Seyi remains committed to using his office as Governor of Oyo State, to bring about development that will outlast his tenure and be used as a benchmark for good governance in Oyo State and Nigeria.
            </Text>
          </View>
        </View>


        <View style={styles.icons_list}>
          <ActionIcons icon='directions' text='Directions' />
          <ActionIcons icon='call' text='Call Office' />
          <ActionIcons icon='email' text='Send and email' />
          <ActionIcons icon='share' text='Share' />
        </View>
        <View style={styles.contactContainer}>
          <Contact />
        </View>
      </ScrollView>
    </View>
  )
}

export default Index


const ActionIcons = ({ icon, text }) => {
  return (
    <View style={styles.action_icon_container}>
      <View style={styles.icon_container}>
        <MaterialIcons name={icon} color='#19686A' size={25} />
      </View>
      <Text style={styles.label}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
    paddingBottom: 10,
  },
  more: {
    fontSize: 23,
    fontFamily: 'Prompt_500Medium',
    color: '#484649',
  },
  moreContainer: {
    borderBottomWidth: 1,
    borderColor: '#19686A',
    borderBottomStyle: 'solid',
    paddingHorizontal: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingBottom: 7,
  },
  action_icon_container: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_container: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#19686A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Prompt_400Regular',
    fontSize: 14,
    color: '#484649',
    marginTop: 10,
    textAlign: 'center',
  },
  party: {
    fontSize: 18,
    color: '#787579',
    marginBottom: 10,
    fontFamily: 'Prompt_500Medium',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    marginBottom: 12,
    color: '#313033',
    lineHeight: 27,
  },
  icons_list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  contactContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 28,
  }
})