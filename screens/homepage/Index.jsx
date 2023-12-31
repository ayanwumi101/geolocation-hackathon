import 'react-native-gesture-handler'
import React, { createRef, useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, StatusBar, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Home3, Notification, Element3, Information, Personalcard, Location as LocationIcon, SearchNormal } from 'iconsax-react-native'
import * as Location from 'expo-location';
import { OutlineButton } from '../../components/button';
import SearchBar from '../../components/searchBar';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons'
import ContactDetails from '../contactDetails/index';

// This data will come from backend
const markersList = [
  {
    // id: "1",
    coordinate: {
      latitude: 7.3775349,
      longitude: 3.9470401,
    },
    type: {
      // id: '1',
      title: 'Fire',
    }
  },
  {
    // id: "2",
    coordinate: {
      latitude: 20.3775349,
      longitude: 5.9470401,
    },
    type: {
      // id: '2',
      title: 'Robbery',
    }
  },
  {
    // id: "3",
    coordinate: {
      latitude: 1.3775349,
      longitude: 15.9470401,
    },
    type: {
      // id: '4',
      title: 'Fight',
    }
  },
]

// The emergencies filter bar
const emergencies = [
  {
    // id: '1',
    title: 'Fire',
    icon: require('../../assets/fire.png')
  },
  {
    // id: '2',
    title: 'Robbery',
    icon: require('../../assets/police.png')
  },
  {
    // id: '3',
    title: 'Medical Care',
    icon: require('../../assets/medic.png')
  },
  {
    // id: '4',
    title: 'Fight',
    icon: require('../../assets/agency.png')
  },
]

// This is used in the map as the Emergency Icons
// The map SDK only support local image resources
const markerImageTable = {
  'Fire': require('../../assets/fire.png'),
  'Robbery': require('../../assets/police.png'),
  'Medical Care': require('../../assets/medic.png'),
  'Fight': require('../../assets/agency.png'),
}

const Index = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [filters, setFilters] = useState([])
  const [markers, setMarkers] = useState(markersList)
  const [searchPlace, setSearchPlace] = useState({})

  const mapRef = useRef(null)

  const handleFilter = (f) => {
    setFilters(filters => {
      const i = filters.indexOf(f)
      if (i === -1) {
        return [...filters, f]
      } else {
        console.log(filters)
        return filters.filter(v => v !== f)
      }
    })
  }
  // Filter Markers
  useEffect(() => {
    setMarkers(filters.length === 0
      ? markersList
      : markersList.filter(v => filters.includes(v.type.title))
    )
  }, [filters])

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access userLocation was denied');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      let coord = {
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02,
      }
      mapRef.current.animateToRegion(coord, 100)
    })();
  }, []);

  useEffect(() => {

    if (searchPlace.geometry) {
      let coord = {
        latitude: searchPlace.geometry.lat,
        longitude: searchPlace.geometry.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02,
      }
      console.log("Ref", coord, mapRef.current)
      mapRef.current.animateToRegion(coord, 1000)
    }
  }, [searchPlace])


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '65%'], []);
  const openBottomSheet = () => bottomSheetRef?.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();

  return (
    <View>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          minZoomLevel={15}
          mapPadding={{ top: StatusBar.currentHeight + 110 }}
          onLayout={(e) => 1}
          style={{ width: '100%', height: '100%' }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {markers.map((marker, i) =>
            <Marker
              key={i}
              coordinate={marker.coordinate}
              title={marker.type.title}
              // description={marker.description}
              image={markerImageTable[marker.type.title]}
            />
          )}
          {/*If searchPlaces Create a marker at the region */}
          {searchPlace.geometry && <Marker
            coordinate={{
              latitude: searchPlace.geometry.lat,
              longitude: searchPlace.geometry.lng,
            }}
            title={searchPlace.formatted}
          />}
        </MapView>
        <View style={styles.header}>
          <SearchBar onSearch={(place) => setSearchPlace(place)} />
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.headerContainer}>
            {emergencies.map((item, i) =>
              <TouchableOpacity key={i}
                onPress={() => handleFilter(item.title)}
                style={StyleSheet.compose(styles.headerItem, {
                  backgroundColor: filters.includes(item.title) ? '#19686A' : 'white',
                })}>
                <Image source={item.icon} style={{ width: 25, height: 25 }} />
                <Text
                  style={{ color: filters.includes(item.title) ? 'white' : 'black', fontFamily: 'Prompt_400Regular' }}
                >{item.title}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>

        <TouchableOpacity onPress={openBottomSheet}>
            <View style={styles.campaign_btn}>
              <MaterialIcons name='campaign' color='#19686A' size={30} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact_btn_parent_container} onPress={openBottomSheet}>
          <View>
            <View style={styles.contact_btn}>
              <Personalcard color='white' variant='Bold' />
              <Text style={styles.btn_text}>GET CONTACT</Text>
            </View>
          </View>
        </TouchableOpacity>

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backgroundStyle={{ borderRadius: 50, }}
        >
          <View>
            {/* <BottomSheetScrollView horizontal={true}> */}
              <ContactDetails />
            {/* </BottomSheetScrollView> */}
          </View>
        </BottomSheet>
      </View>
    </View>
  )
}

export default Index


const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  header: {
    position: 'absolute',
    paddingTop: StatusBar.currentHeight + 10,
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
    fontFamily: 'Prompt_400Regular',
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
    fontFamily: 'Prompt_400Regular',
  },
  headerContainer: {
    paddingHorizontal: 10,
  },
  headerItem: {
    marginRight: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#19686A',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contact_btn: {
    backgroundColor: '#19686A',
    color: 'white',
    borderRadius: 4,
    width: 164,
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    shadowColor: 'black',
    elevation: 8,
  },
  btn_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
  },
  contact_btn_parent_container: {
    position: 'absolute',
    bottom: 40,
    right: 15,
    // zIndex: 2,
  },
  campaign_btn: {
    position: 'absolute',
    bottom: 110,
    right: 15,
    zIndex: 10,
    backgroundColor: '#A8EFF0',
    borderRadius: 4,
    width: 54,
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 10,
  }
})