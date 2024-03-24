import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const Index = ({navigation}) => {
  const goToSignup = () => {
    navigation.navigate('more')
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
      <View style={styles.container}>
        <View style={styles.moreContainer}>
          <Text style={styles.more}>More</Text>
        </View>
        

        <View style={styles.linksContainer}>
          <View>
            <View style={styles.linkContainer}>
              <View style={styles.linkIconContainer}>
                <MaterialIcons name='settings' color='#19686A' size={25} />
              </View>
              <Text style={styles.linkText}>Settings</Text>
            </View>

            <View style={styles.linkContainer}>
              <View style={styles.linkIconContainer}>
                <MaterialIcons name='archive' color='#19686A' size={25} />
              </View>
              <Text style={styles.linkText}>Saved Locations</Text>
            </View>

            <View style={styles.linkContainer}>
              <View style={styles.linkIconContainer}>
                <MaterialIcons name='support-agent' color='#19686A' size={25} />
              </View>
              <Text style={styles.linkText}>Help centre</Text>
            </View>

            <View style={styles.linkContainer}>
              <View style={styles.linkIconContainer}>
                <MaterialIcons name='library-books' color='#19686A' size={25} />
              </View>
              <Text style={styles.linkText}>About us</Text>
            </View>
          </View>

          <View>
              {isLoggedIn ? 
                <TouchableOpacity onPress={() => navigation.navigate('profile-screen')}>
                  <View style={styles.linkContainer}>
                    <Image source={require('../../assets/second-screen.png')} style={styles.user_avatar} />
                    <Text style={styles.username}>Olawuwo Abeeb Akande</Text>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={goToSignup}>
                  <View style={styles.linkContainer}>
                    <View style={styles.linkIconContainer}>
                      <MaterialIcons name='account-circle' color='#19686A' size={25} />
                    </View>
                    <View>
                      <Text style={styles.linkText}>Sign Up</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
          </View>
        </View>
      </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: 'white',
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
    marginBottom: 25,
  },
  linksContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E6E1E5',
    bordeerBottomStyle: 'solid',
    paddingBottom: 10,
    marginBottom: 20,
  },
  linkIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#A8EFF0',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    color: 'black',
  },
  user_avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  }, 
  username: {
    fontSize: 18,
    fontFamily: 'Prompt_500Medium',
  }
})