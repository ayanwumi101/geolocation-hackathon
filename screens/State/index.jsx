import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import Tabs from './Tabs'
import ExecutiveCards from './ExecutiveCards'

const Index = ({route, navigation}) => {
  const state = route.params;
  return (
      <View style={styles.container}>
          <View style={styles.moreContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name='chevron-left' color='#19686A' size={38} />
            </TouchableOpacity>
            <View>
                <Text style={styles.more}>{state.state}</Text>
            </View>
          </View>
          
          <View>
            <Tabs />
          </View>
          
          <View style={styles.cardsContainer}>
            <ExecutiveCards navigation={navigation} />
          </View>
          
      </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48,
        paddingBottom: 75,
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
        // marginBottom: 10,
    },
    moreContainer: {
        borderBottomWidth: 1,
        borderColor: '#19686A',
        borderBottomStyle: 'solid',
        paddingHorizontal: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        paddingBottom: 7,
    },
    cardsContainer: {
        paddingHorizontal: 25,
        paddingBottom: 50,
    }
})