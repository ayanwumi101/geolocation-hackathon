 import React from 'react'
import { View, Text, StyleSheet, Button, Modal } from 'react-native'
 
 const locationModal = () => {
   return (
       <Modal
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
       </Modal>
   )
 }
 
 export default locationModal