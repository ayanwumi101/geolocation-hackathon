import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons'

const Contact = () => {
  return (
    <View>
      <ContactLink icon='call' text='+2348127671686' copy={true} />
      <ContactLink icon='email' text='uhs@ui/service.ng' copy={true} />
      <ContactLink icon='location-on' text='Jaja avenue, University of Ibadan, Ibadan' copy={false} />
      <ContactLink icon='web' text='www.ui.edu.ng/UHS' copy={false} />
    </View>
  )
}

export const ContactLink = ({icon, text, copy}) => {
  return (
    <View style={styles.contact_link_container}>
      <View>
        {icon === 'web' ? 
          <MaterialCommunityIcons name={icon} size={25} color='#19686A' />
          :
          <MaterialIcons name={icon} size={25} color='#19686A' />
        }
      </View>
      <View style={styles.column}>
        <View>
          <Text style={styles.number}>{text}</Text>
        </View>
       {
        copy && (
            <View style={styles.copy_icon_container}>
              <Text style={styles.copy}>copy</Text>
              <MaterialIcons name='content-copy' size={23} color='#19686A' />
            </View>
        )
       }
      </View>
    </View>
  )
}

export default Contact


const styles = StyleSheet.create({
  contact_link_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C9C5CA',
    justifyContent: 'space-between',
    paddingVertical: 15,
    width: '85%',
  },
  copy_icon_container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  number: {
    fontSize: 17,
    fontFamily: 'Prompt_400Regular',
    color: '#484649'
  },
  copy: {
    fontSize: 17,
    fontFamily: 'Prompt_400Regular',
    color: '#19686A'
  }
})