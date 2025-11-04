import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Usuario } from '../Modelos/Usuario'
import { contextUsuario } from '../Contexto/UsuarioContex'

export default function ProviderUsuario({ children }: PlantillaReact) {

    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);

    useEffect(() => {

        let lista: Usuario = {
            id: 1,
            nombre: 'Ana',
            apellido: 'Lopez'
        }

        setListaUsuario([...listaUsuario, lista])

    }, []);

    function agregarUsuario(usuaro:Usuario){

        setListaUsuario([...listaUsuario,usuaro])

    }

    return (

            <contextUsuario.Provider value={{ listaUsuario,agregarUsuario }}>
                {children}
            </contextUsuario.Provider>

    )
}

export const useContextUsuario=()=>{
    return useContext(contextUsuario)
}