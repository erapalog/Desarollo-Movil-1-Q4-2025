import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Resultado from './Resultado'

export default function Consumidor() {

  const [contador, setContador]=useState<number>(0)

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){
    setContador(contador-1)
  }

  return (
    <View>

       <Button title='Sumar contador' onPress={sumarContador}></Button>
       <Button title='Restar contador' onPress={restarContador}></Button>

       <Resultado contador={contador} mensaje='hola'></Resultado>


    </View>
  )
}