import { View, Text } from 'react-native'
import React from 'react'


interface props{
    contador: number
    mensaje:string
}

export default function Resultado({contador,mensaje}:props) {
  return (
    <View>
      <Text>El resultado de la operacion es: {contador}</Text>
    </View>
  )
}