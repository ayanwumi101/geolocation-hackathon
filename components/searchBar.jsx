import React, { useEffect, useMemo, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Home3, Notification, Element3, Information, Location as LocationIcon, SearchNormal, CloseCircle } from 'iconsax-react-native'
import * as opencage from "opencage-api-client"


export default function SearchBar({onSearch=(place) => null}) {
    const [isActive, setIsActive] = useState(false)
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const [places, setPlaces] = useState([])
    const [selectedPlace, setSelectedPlace] = useState(null)
    useMemo(() => {
        (
            async () => {
                setError('')
                try {
                    let data = await opencage.geocode({ q: query, key: "8dd1ab8470dc4b56881dd30e6afd1686" });
                    if (data.status.code === 200) {
                        if (data.results.length > 0) {
                            // SUCCESS
                            const place = data.results[0];
                            console.log(place.formatted);
                            console.log(place.geometry);
                            console.log(place.annotations.timezone.name);
                            setPlaces(data.results)
                        } else {
                            // ERROR
                            console.log('total_results', data.total_results);
                            setError('Invalid location')
                        }

                    } else {
                        console.log('Status', data.status.message);
                        // console.log('total_results', data.total_results);
                        setError(data.status.message);
                    }
                } catch (error) {
                    console.log("Error", error)
                    setError(error)
                }

            }
        )()
    }, [query])

    const handleSetSelectedPlace = (place) => {
        setSelectedPlace(place)
        setQuery(place.formatted)
        setIsActive(false)
        onSearch(place)
    }

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <LocationIcon color='#AEAAAE' size={28} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search...'
                    value={query}
                    onChangeText={(value) => setQuery(value)}
                    onFocus={() => setIsActive(true)}
                    onSubmitEditing={() => setIsActive(false)}
                />
                <TouchableOpacity onPress={() => setQuery('')}>
                    <CloseCircle color='#AEAAAE' size={28} />
                </TouchableOpacity>
            </View>
            {query && isActive && <FlatList style={styles.searchDropdown}
                data={places}
                renderItem={({item}) => <SearchItem onPress={() => handleSetSelectedPlace(item)}>{item.formatted}</SearchItem>}
            />}
        </View>
    )
}


function SearchItem({children, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.searchItem}>
            <Text style={styles.searchItemText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        position: 'relative',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 40,
        shadowColor: 'black',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowRadius: 5,
        elevation: 5,
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    searchDropdown: {
        // display: 'none',
        position: 'absolute',
        top: 40,
        height: 175,
        width: Dimensions.get('window').width - 20,
        marginHorizontal: 10,
        zIndex: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowRadius: 5,
        elevation: 10,
    },
    searchItem: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#19686A',
        borderStyle: 'solid',
    },
    searchItemText: {
        fontSize: 14,
        lineHeight: 16,
        color: '#345'
    },
})