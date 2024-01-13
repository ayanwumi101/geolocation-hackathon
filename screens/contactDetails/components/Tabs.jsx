import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Tabs = ({ activeTab, setActiveTab }) => {
    const links = ['Overview', 'Contact', 'Comments']
  return (
    <View style={styles.container}>
        <View style={styles.links_container}>
            {links.map((link, index) => (
                <TouchableOpacity style={styles.link_container} key={index} onPress={() => setActiveTab(index)}>
                    <Text key={link} style={index === activeTab ? styles.active_link : styles.link}>{link}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 12,
    },
    links_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    link_container: {
        width: '28%',
    },
    active_link: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#19686A',
        textTransform: 'capitalize',
        fontFamily: 'Prompt_500Medium',
        borderBottomColor: '#19686A',
        borderBottomWidth: 3,
        paddingBottom: 12,
        width: '100%',
        textAlign: 'center',
    },
    link: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#787579',
        textTransform: 'capitalize',
        fontFamily: 'Prompt_400Regular',
        paddingBottom: 12,
        width: '100%',
        textAlign: 'center',
    }
})