import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import {MaterialIcons} from '@expo/vector-icons'
import { RatingInput } from 'react-native-stock-star-rating'


const index = ({modalVisible, setModalVisible}) => {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if(step === 3){
        setModalVisible(false);
        setStep(0)
    }else{
        setStep(step + 1);
    }
  }

  return (
    <View>
        <Modal isVisible={modalVisible} animationIn='zoomInUp' onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer} >
                <View>
                    {step === 0 && <FirstStep />}
                    {step === 1 && <SecondStep />}
                    {step === 2 && <ThirdStep />}
                    {step === 3 && <FourthStep />}
                </View>
                <View>
                    <TouchableOpacity onPress={handleClick}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>{step === 3 ? 'FINISH' : 'CONTINUE'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                  {step > 0 && 
                    <View style={styles.modalFooter}>
                        <View>
                            <Text style={styles.step}>{step + 1} of 4</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setStep(step - 1)}>
                                <Text style={styles.return}>RETURN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  }
            </View>
           
        </Modal>
    </View>
  )
}

export default index

const FirstStep = () => {
    const options = ['Yes', 'No', "I didn't call the number"]
    const [activeOption, setActiveOption] = useState(-1);
    return (
        <View>
            <Text style={styles.stepHeading}>Was the number reachable?</Text>
            <View>
                {options.map((option, index) => <Option option={option} key={index} index={index} activeOption={activeOption} setActiveOption={setActiveOption} />)}
            </View>
        </View>
    )
}


const SecondStep = () => {
    const options = ['Voice Call', 'SMS', "Whatsapp message/call"]
    const [activeOption, setActiveOption] = useState(-1);
    return (
        <View>
            <Text style={styles.stepHeading}>Was the number reachable?</Text>
            <View>
                {options.map((option, index) => <Option option={option} key={index} index={index} activeOption={activeOption} setActiveOption={setActiveOption} />)}
            </View>
        </View>
    )
}


const ThirdStep = () => {
    const options = ['Yes', 'No', "Maybe"]
    const [activeOption, setActiveOption] = useState(-1);
    return (
        <View>
            <Text style={styles.stepHeading}>Was the call helpful?</Text>
            <View>
                {options.map((option, index) => <Option option={option} key={index} index={index} activeOption={activeOption} setActiveOption={setActiveOption} />)}
            </View>
        </View>
    )
}


const FourthStep = ( ) => {
    const [rating, setRating] = useState(0)
    return (
        <View>
            <Text style={styles.stepHeading}>What would you rate the response?</Text>
            <View style={styles.starContainer}>
                <RatingInput
                    rating={rating}
                    setRating={setRating}
                    size={50}
                    maxStars={5}
                    bordered={false}
                />
            </View>
            <View style={styles.rating}>
                <Text style={styles.comment}>Bad</Text>
                <Text style={styles.comment}>Great</Text>
            </View>
        </View>
    )
}


const Option = ({option, index, activeOption, setActiveOption}) => {
    return (
        <TouchableOpacity onPress={() => setActiveOption(index)}>
            <View style={index === activeOption ? styles.activeOption : styles.optionContainer}>
                <Text style={index === activeOption ? styles.activeOptionText : styles.optionText}>{option}</Text>
                {index === activeOption && <MaterialIcons name='check' color='#19686A' size={23} />}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        padding: 20,
        borderRadius: 12,
    },
    stepHeading: {
        fontSize: 18,
        fontFamily: 'Prompt_500Medium',
        color: '#484649',
        marginBottom: 15,
    },
    optionContainer: {
        marginBottom: 20,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#939094',
        borderRadius: 4,
        paddingVertical: 15,
    },
    optionText: {
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
        color: '#484649',
    },
    btnContainer: {
        width: '100%',
        backgroundColor: '#19686A',
        paddingVertical: 15,
        borderRadius: 4,
        marginBottom: 15,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
        letterSpacing: 2
    },
    activeOption: {
        width: '100%',
        borderColor: '#19686A',
        backgroundColor: '#BCFFFF',
        marginBottom: 20,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    activeOptionText: {
        color: '#19686A',
        fontSize: 16,
        fontFamily: 'Prompt_400Regular',
    },
    modalFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    step: {
        color: '#787579',
        fontSize: 15,
        fontFamily: 'Prompt_400Regular'
    },
    return: {
        fontSize: 16,
        color: '#19686A',
        fontFamily: 'Prompt_700Bold'
    },
    starContainer: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rating: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 25,
    },
    comment: {
        fontFamily: 'Prompt_400Regular',
        fontSize: 15,
        color: '#939094'
    }
})