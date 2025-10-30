import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import {contextOperaciones} from '../Contextos/ContextOperaciones'

//1. Renderizar un componente Reacr, props> ReactNode
//2. Definiciones y funcionalidad
//3. exportar funcionalidad


interface plantillaReact{
    children: ReactNode
}

export default function ProviderOperaciones({children}: plantillaReact) {

  const [contador, setContador]= useState<number>(0);

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){
    setContador(contador-1)
  }


  return (
    <View>

        <contextOperaciones.Provider value={{contador, sumarContador,restarContador}}>
            {children}
        </contextOperaciones.Provider>
     
    </View>
  )
}

export const useContador =()=>{
    return useContext(contextOperaciones)
}