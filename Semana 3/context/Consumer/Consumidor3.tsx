import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderOperaciones'

export default function Consumidor3() {

  const {restarContador,contador} = useContador()
  return (
    <View>
        <Button title='Restar Contador' onPress={restarContador}></Button>
    </View>
  )
}