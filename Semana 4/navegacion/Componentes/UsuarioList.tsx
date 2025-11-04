import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Provider/ProviderUsuario'


export default function UsuarioList() {

  const { listaUsuario } = useContextUsuario();


  return (
    <View>

      <FlatList
        data={listaUsuario}
        contentContainerStyle={style.grid}
        keyExtractor={(_, i) => i.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <View key={item.id} style={style.card}>
            <Text style={style.cardText}>Nombre: {item.nombre}</Text>
            <Text style={style.cardText}>Apellido: {item.apellido}</Text>
          </View>

        )}

      >

      </FlatList>

    </View>
  )
}

const style= StyleSheet.create({
  grid: {
    alignItems:'center',
    marginTop: 20
  },
  card:{
    width:70,
    height:90,
    margin:5,
    borderRadius:10,
    backgroundColor:'#9e9e9e',
    justifyContent:'center',
    elevation:4
  },
  cardText:{
    fontSize:15,
    color:'white'
  }
})