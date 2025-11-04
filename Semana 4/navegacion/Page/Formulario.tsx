import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useContextUsuario } from '../Provider/ProviderUsuario'
import { Usuario } from '../Modelos/Usuario';
import UsuarioList from '../Componentes/UsuarioList';

export default function Formulario() {


  const { agregarUsuario, listaUsuario } = useContextUsuario();

  const [nombre, setNombre] = useState<string>('')
  const [apellido, setApellido] = useState<string>('')

  function agregarUsuarioForm() {

    let usuario: Usuario = {
      id: listaUsuario.length + 1,
      nombre: nombre,
      apellido: apellido

    }

    agregarUsuario(usuario);

    Alert.alert('Usuario Agregado correctamente')



  }

  return (
    <View>
      <Text>Formulario</Text>

      <TextInput placeholder='Ingrese su nombre'
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      ></TextInput>

      <TextInput placeholder='Ingrese su apellido'
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}

      ></TextInput>

      <Button title='Agregar Usuario' onPress={agregarUsuarioForm}></Button>

      <UsuarioList></UsuarioList>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 10
  }
})