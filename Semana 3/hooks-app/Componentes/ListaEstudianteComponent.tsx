import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../Modelos/Estudiantes'
import ListaComponent from './ListaComponent';
import FlatListComponent from './FlatListComponent';

export default function ListaEstudianteComponent() {

    const [listaEstudiante, setListaEstudiante] = useState<Estudiante[]>([]);
    const [nombre, setNombre] = useState<string>('')
    const [curso, setCurso] = useState<string>('')

    useEffect(() => {

        let lista: Estudiante[] = [{
            id: 1,
            nombre: 'Ricardo',
            curso: 'Programacion'
        },
        {
            id: 2,
            nombre: 'Pedro',
            curso: 'Programacion'
        },
        {
            id: 3,
            nombre: 'Juan',
            curso: 'Programacion'
        }]
        setListaEstudiante(lista)

    }, []);



    function agregarAlumno() {
        let nuevoAlumno: Estudiante = {
            id: listaEstudiante.length + 1,
            nombre: nombre,
            curso: curso
        };

        Alert.alert('Alumno Agregado')
        setListaEstudiante([...listaEstudiante, nuevoAlumno])


    }

    useEffect(() => {
        console.log('La lista ha incrementado');

        // Alert.alert('La lista ha incrementado')
    }, [listaEstudiante]);


    return (
        <View>

            <TextInput placeholder='Ingresar Nombre'
                value={nombre}
                onChangeText={setNombre}
            >

            </TextInput>

            <TextInput placeholder='Ingresar Curso'
                value={curso}
                onChangeText={setCurso}
            >

            </TextInput>

            <Text>{nombre} - {curso}</Text>

            <Button title='Agregar Estudiante' onPress={agregarAlumno}></Button>


            <ListaComponent lista={listaEstudiante}></ListaComponent>
            <FlatListComponent lista={listaEstudiante}></FlatListComponent>
        </View>
    )
}