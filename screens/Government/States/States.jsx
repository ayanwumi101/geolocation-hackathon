import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { states } from './data'
import stateImage from '../../../assets/senate.png'

const States = ({navigation}) => {
  const [stateList, setStateList] = useState([]);

    useEffect(() => {
        const flattenedStateNames = states.flatMap((item) => Object.keys(item));
        setStateList(flattenedStateNames);
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>States</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {stateList.map((item, index) => <Cards title={item} image={stateImage} key={index} navigation={navigation} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default States


export const Cards = ({ title, image, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('government', {
            screen: "state-screen",
            params: { state: title }
        })}>
            <View style={styles.card}>
                <View>
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingBottom: 40,
    },
    headingTextContainer: {
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        paddingBottom: 10,
    },
    headingText: {
        fontSize: 20,
        fontFamily: 'Prompt_500Medium',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 18,
        paddingHorizontal: 30,
        marginBottom: 20,
        flexGrow: 1,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        gap: 20,
        // marginBottom: 20,
    },
    image: {
        width: 60,
        height: 60,
        objectFit: 'cover',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Prompt_400Regular',
    },
})