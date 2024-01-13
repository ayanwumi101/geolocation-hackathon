import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Overview from './screens/Overview'
import Contact from './screens/Contact'
import Comments from './screens/Comments'


const index = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <View style={styles.container}>
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <View>
            {activeTab === 0 && <Overview />}
            {activeTab === 1 && <Contact />}
            {activeTab === 2 && <Comments navigation={navigation} />}
        </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 10,
    }
})