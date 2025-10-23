import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function SaludoPersona2(prop: Persona) {
  return (
    <View>
      <Text>
        Hola {prop.nombre} - {prop.apellido}

      </Text>
       <Text>
        Edad {prop.edad} 
        
      </Text>
    </View>
  )
}