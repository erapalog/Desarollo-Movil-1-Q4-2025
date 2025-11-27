import { View, Text, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { MapMarker } from 'react-native-maps';

export default function MiUbicacion() {

   const [location, setLocation]=useState<Location.LocationObject | null>(null);

    useEffect(()=>{
        (
            async ()=>{
                let {status} = await Location.requestForegroundPermissionsAsync()

                if(status!=='granted'){
                    Alert.alert('Debe otorgar permiso de ubicacion')
                    return
                }

                let location= await Location.getCurrentPositionAsync();
                setLocation(location)
            }
        )();
    },[])

  return (
    <View style={style.container}>

        {
            location ? (
                <MapView style={style.map}
                 
                initialRegion={{
                    latitude:location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0432
                    
                }}
                
                >

                    <MapMarker coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    }}
                    title='Mi ubicacion'
                    description='Mi punto de refencia en mi casa'
                    >

                    </MapMarker>
                </MapView>
            ):
            (
                <Text>Cargando Mapa...</Text>
            )
        }
       
    </View>
  )
}


const style= StyleSheet.create({
  container:{
    flex:1
  },

  map:{
    height:"100%",
    width:'100%'
  }

})