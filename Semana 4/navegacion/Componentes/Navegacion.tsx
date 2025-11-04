import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Page/Home';
import Usuario from '../Page/Usuario';
import Formulario from '../Page/Formulario';

export default function Navegacion() {

  const tab = createBottomTabNavigator();


  return (


    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Home' component={Home}></tab.Screen>
            <tab.Screen name='Lista Usuario' component={Usuario}></tab.Screen>
            <tab.Screen name='Agregar Usuario' component={Formulario}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   
  )
}