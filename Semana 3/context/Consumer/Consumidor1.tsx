import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderOperaciones'

export default function Consumidor1() {

  const {contador,sumarContador,restarContador}= useContador();

  return (
    <View>
      
      <Button title='Sumar Contador' onPress={sumarContador}></Button>
       <Button title='Restar Contador' onPress={restarContador}></Button>

      <Text>Valor contador {contador}</Text>
    </View>
  )
}