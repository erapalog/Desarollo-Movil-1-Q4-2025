import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ListaEstudiante } from '../Modelos/ListaEstudiante'

export default function FlatListComponent({lista}:ListaEstudiante) {
  return (
   <FlatList
    data={lista}
    keyExtractor={item=> item.id.toString()}
    renderItem={({item})=>(
        <View>
             <Text>ID: {item.id}</Text>
             <Text>Nombre: {item.nombre}</Text>
             <Text>Curso: {item.curso}</Text>
        </View>
    )}
    scrollEnabled={true}
   >

   </FlatList>
  )
}