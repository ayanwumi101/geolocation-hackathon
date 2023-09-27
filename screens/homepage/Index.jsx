import React, { createRef, useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, StatusBar, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Home3, Notification, Element3, Information, Location as LocationIcon, SearchNormal } from 'iconsax-react-native'
import * as Location from 'expo-location';
import { OutlineButton } from '../../components/button';
import SearchBar from '../../components/searchBar';


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
                  style={{ color: filters.includes(item.title) ? 'white' : 'black', }}
                >{item.title}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
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
})