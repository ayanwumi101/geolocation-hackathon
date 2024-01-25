import { StyleSheet, Text, View, TouchableOpacity, Alert, Modal, Pressable } from 'react-native'
import React, {useState} from 'react'
import FeedbackModal from './FeedbackModal'

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main}>
        <View style={styles.container}>
        <View>
                <Text style={styles.upper_text}>
                    The short survey is to understand your experience when you called “University Health Services”, your response will be of assistance to guiding us on how we can make the experience of others a better one.
                </Text>
                <Text style={styles.lower_text}>
                    Note: You are totally anonymous and no one would know you filled this survey. 
                </Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.btn_container}>
                    <Text style={styles.btn_text}>PROCEED</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
        <FeedbackModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default Index


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 35,
        display: 'flex',
        justifyContent: 'space-between',
    },
    btn_container: {
        width: '100%',
        backgroundColor: '#19686A',
        paddingVertical: 17,
        borderRadius: 4,
    },
    btn_text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
    },
    upper_text: {
        color: '#313033',
        fontSize: 15,
        lineHeight: 24,
        fontFamily: 'Prompt_400Regular',
        marginBottom: 20,
    },
    lower_text: {
        color: '#313033',
        fontSize: 15,
        lineHeight: 24,
        fontFamily: 'Prompt_400Regular',
        marginBottom: 20,
    },
})