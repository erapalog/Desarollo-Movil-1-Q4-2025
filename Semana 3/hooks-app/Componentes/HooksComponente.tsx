import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HooksComponente() {

    //contador, incremente , decrementar

    const [contador, setContador] = useState<number>(0);

    const [nombre, setNombre] = useState<string>('')

    const [apellido, setApellido] = useState<string | null>(null);

    const [listaNombre, setListaNombre] = useState<[]>([]);

    var contadorVariable=0;

    function sumarContador() {
        setContador(contador + 1);
    }


    function restarContador() {
        if(contador==0)
            return
        setContador(contador - 1)
    }


    useEffect(()=>{
        setContador(10)
        console.log('componente cargado')
    },[]);


    return (
        <View>
            <Text>Utilizando Hooks</Text>

            <Text>Valor del contador {contador}</Text>

            <Button title='Aumentar Contador' onPress={sumarContador}></Button>
            <Button title='Restar Contador' onPress={restarContador}></Button>
        </View>
    )
}