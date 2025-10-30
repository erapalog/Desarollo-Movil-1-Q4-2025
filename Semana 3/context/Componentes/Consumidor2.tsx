import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Resultado from './Resultado'

export default function Consumidor2() {
    const [contador, setContador] = useState<number>(0)

    function restarContador() {
        setContador(contador - 1)
    }


    return (
        <View>
            <Button title='Restar contador' onPress={restarContador}></Button>
            <Resultado contador={contador} mensaje='hola'></Resultado>


        </View>
    )
}