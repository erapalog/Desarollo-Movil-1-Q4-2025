import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Camara from '../page/Camara'
import Mapas from '../page/Mapas'
import Acelerometro from '../page/Acelerometro'
import MiUbicacion from '../page/MiUbicacion'

export default function Navegacion() {

    const tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name='Camara' component={Camara} ></tab.Screen>
                <tab.Screen name='Mapas' component={Mapas} ></tab.Screen>
                <tab.Screen name='Aceletrometro' component={Acelerometro} ></tab.Screen>
                 <tab.Screen name='Mi UBicacion' component={MiUbicacion} ></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    )
}