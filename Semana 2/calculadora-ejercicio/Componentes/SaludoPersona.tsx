import { View, Text } from 'react-native'
import React from 'react'

//destructuracion
export default function SaludoPersona({nombrePersona, ApellidoPersona}: any) {
  return (
    <View>
      <Text>Hola : {nombrePersona} - {ApellidoPersona}</Text>
    </View>
  )
}