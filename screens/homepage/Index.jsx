import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Modal } from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const Index = () => {
  // const [isLocationModalVisible, setLocationModalVisible] = useState(true);
  // const [locationPermissionStatus, setLocationPermissionStatus] = useState(null);


  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Permissions.askAsync(Permissions.LOCATION);
  //     if (status === 'granted') {
  //       setLocationPermissionStatus('granted');
  //     } else {
  //       setLocationPermissionStatus('denied');
  //     }
  //   })();
  // }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Map displays here on the Homepage</Text>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isLocationModalVisible}
      >
        <View>
          <Text>Allow the app to access your location?</Text>
          <Button
            title="Allow"
            onPress={() => {
              // Close the modal
              setLocationModalVisible(false);

               // Check if permission was granted
              if (locationPermissionStatus === 'granted') {
                // Do something with the location
              }
            }}
          />
        </View>
      </Modal> */}
    </View>
  )
}

export default Index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Prompt_400Regular',
    color: '#19686A',
    textAlign: 'center',
  }
})