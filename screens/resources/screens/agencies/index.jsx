import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import Search from '../../../../components/Search'
import { states } from '../../../Government/States/data'
import stateImage from '../../../../assets/senate.png'

const Index = ({navigation}) => {
    const [stateList, setStateList] = useState([]);

    useEffect(() => {
        const flattenedStateNames = states.flatMap((item) => Object.keys(item));
        setStateList(flattenedStateNames);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Search />
            </View>
            <View style={styles.scroll}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cardsContainer}>
                        <View style={styles.card}>
                            <View>
                                <Image
                                    source={stateImage}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>

                            <View>
                                <Text style={styles.cardTitle}>Federal Agencies</Text>
                            </View>

                        </View>

                        {stateList.map((item, index) => <Cards title={item} image={stateImage} key={index} navigation={navigation} />)}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Index

export const Cards = ({ title, image, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('agencies', {
            screen: "federal-agencies",
            params: { agencies: title }
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
      paddingHorizontal: 25,
    },
    searchContainer: {
        marginBottom: 20,
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
    scroll: {
        paddingBottom: 150,
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
        paddingBottom: 150,
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
