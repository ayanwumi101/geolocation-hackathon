import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker'
import {MaterialIcons} from '@expo/vector-icons'


const Index = () => {
  const [emergencyType, setEmergencyType] = useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.heading_container}>
            <Text style={styles.heading_text}>Alert other people in a geographical region of an emergency situation anonymously </Text>
        </View>
        <View>
            <View style={styles.form_control}>
                  <LabelText text='What type of emergency?' />
                  <View style={styles.dropdown}>
                      <Picker
                          selectedValue={emergencyType}
                          onValueChange={(itemValue, itemIndex) =>
                              setEmergencyType(itemValue)
                          }>
                          <Picker.Item label="Medical emergency" value="Medical emergency" />
                          <Picker.Item label="Police emergency" value="Police emergency" />
                          <Picker.Item label="Automobile accident" value="Automobile accident" />
                          <Picker.Item label="Electrical hazards" value="Electrical hazards" />
                          <Picker.Item label="Fire emergency" value="Fire emergency" />
                          <Picker.Item label="Environmental hazards" value="Environmental hazards" />
                      </Picker>
                  </View>
            </View>
            <View style={styles.form_control}>
                  <LabelText text='Where is it happening?' />
                  <TextInput
                      placeholder='Type here'
                      style={styles.input}
                      selectionColor='black'
                  />
            </View>
            <View style={styles.form_control}>
                  <LabelText text='What time did it happen?' />
                  <TouchableOpacity onPress={showTimepicker}>
                      <TextInput
                          placeholder='--please select a time--'
                          style={styles.input}
                          selectionColor='black'
                          editable={false}
                          value={formatTime(date)}
                      />
                  </TouchableOpacity>
                  {show && (
                      <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={false}
                          onChange={onChange}
                      />
                  )}
            </View>
            <View style={styles.form_control}>
                  <LabelText text="What's happening?" />
                  <TextInput
                      placeholder='Describe the situation'
                      style={styles.textarea}
                      selectionColor='black'
                      multiline={true}
                      numberOfLines={7}
                  />
            </View>
            <View style={styles.form_control}>
                  <LabelText text="Media Proof" />
                  <View style={styles.image_container}>
                      <TouchableOpacity onPress={pickImage}>
                        {image ? 
                            <View style={styles.upload}>
                                      <Image source={{ uri: image?.uri }} style={{ width: 150, height: 120 }} />
                            </View>
                        : 
                            <View style={styles.upload}>
                                <MaterialIcons name='file-upload' color='#787579' size={27} />
                                <Text style={styles.upload_text}>Upload a photos here</Text>
                            </View>
                        }
                      </TouchableOpacity>
                  </View>
            </View>
            <TouchableOpacity>
                <View style={styles.btn_container}>
                    <Text style={styles.btn_text}>SEND ALERT</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  )
}

export default Index

export const LabelText = ({text}) => {
    return (
        <View style={styles.label_text_container}>
            <Text style={styles.label_text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingHorizontal: 20,
         paddingVertical: 20,
         backgroundColor: 'white'
     },
        heading_container: {
            marginBottom: 25,
        },
     heading_text: {
         fontSize: 16,
         fontFamily: 'Prompt_400Regular',
         lineHeight: 24,
     },
     label_text_container: {
        marginBottom: 10,
     },
     label_text: {
        fontSize: 14,
        color: '#313033',
        fontFamily: 'Prompt_400Regular'
     },
     dropdown: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
     },
     form_control: {
        marginBottom: 20,
     },
     input: {
            borderWidth: 1,
            borderColor: '#D0D5DD',
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 15,
            fontFamily: 'Prompt_400Regular',
            fontSize: 16,
     },
    textarea: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 15,
        fontFamily: 'Prompt_400Regular',
        textAlignVertical: 'top',
        fontSize: 16,
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
        // fontFamily: 'Prompt_700Bold',
        fontFamily: 'Prompt_500Medium',
        fontSize: 16,
    },
    image_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        width: '100%',
        height: 130,
    },
    upload: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    upload_text: {
        fontSize: 15,
        fontFamily: 'Prompt_400Regular',
        color: '#787579',
        marginTop: 5,
    }
})