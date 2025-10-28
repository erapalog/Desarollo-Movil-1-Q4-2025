import { View, Text } from 'react-native'
import React from 'react'
import { ListaEstudiante } from '../Modelos/ListaEstudiante'

export default function ListaComponent({lista}:ListaEstudiante) {
  return (
    <View>
         {
                lista.map((item) => (
                    <View key={item.id}>
                        <Text>ID: {item.id}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Curso: {item.curso}</Text>
                    </View>

                ))
            }
    </View>
  )
}