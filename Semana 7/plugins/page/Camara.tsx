import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function Camara() {

  const [selectImage, setSelectImage]= useState<string | null>(null);


  async function pickImage(){

      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync(
        {
            mediaTypes: ['images'],
            quality: 1,
            allowsEditing: true
        }
    )

    if(!resultado.canceled){
        console.log(resultado.assets[0])
        setSelectImage(resultado.assets[0].uri)
    }
  }

  async function openCamera(){

      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync(
        {
            mediaTypes: ['images','videos'],
            quality: 1,
            allowsEditing:true
        }
    )

    if(!resultado.canceled){
        console.log(resultado.assets[0])
        setSelectImage(resultado.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.contenedor1}>
         <Button title='Abrir Galeria' onPress={pickImage}></Button>

        {
            selectImage && <Image source={{uri: selectImage}} style={styles.image}></Image>
        }

      </View>

      <View style={styles.contenedor2}>
         <Button title='Abrir Galeria' onPress={openCamera}></Button>

        {
            selectImage && <Image source={{uri: selectImage}} style={styles.image}></Image>
        }

      </View>
     
    </View>
  )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        padding:20,
        alignItems:'center',
        backgroundColor:'#fff'
    },

    contenedor1:{
        flexDirection: "row",
        justifyContent:"center",
        width:"100%",
        marginBottom:10
    },
    image:{
        width:200,
        height:200,
        borderRadius:10
    },

    contenedor2:{
        flexDirection: "row",
        justifyContent:"center",
        width:"100%",
        marginBottom:10
    }
})