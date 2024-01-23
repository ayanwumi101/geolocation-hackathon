import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Search from '../../components/Search'
import { MaterialIcons } from '@expo/vector-icons'
import { governmentAgencies } from './data'


const Index = ({navigation}) => {
  
  return (
    <View style={styles.container}>

      <View style={styles.moreContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='chevron-left' color='#19686A' size={38} />
        </TouchableOpacity>
        <View>
          <Text style={styles.more}>Federal Agencies</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Search />
        </View>

        <View style={styles.agenciesContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {governmentAgencies.map((item, index) => <Agency agency={item} key={index} />)}
          </ScrollView>
        </View>
      </View>
     
    </View>
  )
}

export default Index

const Agency = ({agency}) => {
  return (
    <TouchableOpacity>
      <View style={styles.agency}>
        <Text style={styles.agencyText}>{agency}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 45,
    flex: 1,
  },
  more: {
    fontSize: 25,
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
  content: {
    paddingHorizontal: 25,
  },
  searchContainer: {
    marginBottom: 15,
  },
  agency: {
    paddingVertical: 20,
    borderBottomColor: '#E6E1E5',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  agencyText: {
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    color: '#313033',
  },
  agenciesContainer: {
    paddingBottom: 100,
  }
})