import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'

const Tabs = () => {
  const tabs = ['Executives', 'HOA', 'HOR', 'Senate', 'LGA', 'Ward', 'Councillors']
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabContainer}>
            {tabs.map((item, index) => <TouchableOpacity key={index} onPress={() => setActiveTab(index)}><Text style={index === activeTab ? styles.activeTab : styles.tab}>{item}</Text></TouchableOpacity>)}
        </View>
    </ScrollView>
  )
}

export default Tabs

const styles = StyleSheet.create({
    tab: {
        fontSize: 14,
        fontFamily: 'Prompt_400Regular',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#19686A',
        borderWidth: 1,
        borderColor: '#19686A',
        borderRadius: 60,
        textAlign: 'center',
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 13,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    activeTab: {
        fontSize: 14,
        fontFamily: 'Prompt_400Regular',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        borderWidth: 1,
        borderColor: '#19686A',
        borderRadius: 60,
        textAlign: 'center',
        backgroundColor: '#19686A'
    }
})