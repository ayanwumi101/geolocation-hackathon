import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Accordion from '../../../../components/Accordion'

const EmergencyDetails = ({route}) => {
  const {emergency} = route.params;
  return (
    <View>
        <Accordion data={emergency?.questions}  />
    </View>
  )
}

export default EmergencyDetails