import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rutina } from './Modelos/Rutina';
import SaludoPersona from './Componentes/SaludoPersona';
import SaludoPersona2 from './Componentes/SaludoPersona2';
import { Persona } from './Modelos/Persona';

export default function App() {

  let diaEntramiento: number[] = [2, 0, 1, 3, 0, 0, 0];
  let objetivo: number = 4;
  let respuesta: Rutina;



  function calcularDiasEntrenamiento(diaEjercio: number[], objetivo: number): Rutina {

    let diaEntrenado: number = 0;
    let cumplido: string = ''

    for (let item of diaEntramiento) {
      if (item > 0)
        diaEntrenado++
    }

    cumplido = (diaEntrenado > objetivo) ? 'Se cumplio Objetivo' : 'No se cumplio objetivo';


    respuesta = {
      periodo: diaEjercio.length,
      cantidadDiasEntrenamiento: diaEntrenado,
      cumplio: cumplido,
      rating: 1,
      rationDescripcion: 'No cumplio',
      target: objetivo,
      promedio: 7 / diaEntrenado
    }

    return respuesta;


  }

  respuesta = calcularDiasEntrenamiento(diaEntramiento, objetivo);

  let listaPersonas: Persona[] = [{
    nombre: 'pablo',
    apellido: 'Garcia',
    edad: 30
  },
  {
    nombre: 'Juan',
    apellido: 'Garcia',
    edad: 30
  },
  {
    nombre: 'Ana',
    apellido: 'Garcia',
    edad: 30
  },
  {
    nombre: 'Samuel',
    apellido: 'Garcia',
    edad: 30
  }]

  return (
    <View style={styles.container}>
      <Text>Periodo Entrando: {respuesta.periodo}</Text>
      <Text>Cantodad dias Entrenado: {respuesta.cantidadDiasEntrenamiento}</Text>
      <Text>Cumplio: {respuesta.cumplio}</Text>
      <Text>rating : {respuesta.rating}</Text>
      <Text>Descripcion: {respuesta.rationDescripcion}</Text>
      <Text>target: {respuesta.target}</Text>

      <Text>Promedio: {respuesta.promedio}</Text>


      <SaludoPersona nombrePersona='Ana' ApellidoPersona="Lopez"></SaludoPersona>

      <SaludoPersona2 nombre='Pedro' apellido='Garcia'></SaludoPersona2>

      <SaludoPersona2 nombre='Juan' apellido='Gomez' edad={90}></SaludoPersona2>


      {
        listaPersonas.map((item)=>(
          <View key={item.nombre}>
             <Text>Nombre Persona: { item.nombre} {item.apellido} - {item.edad}</Text>            
         </View>

        ))
      }


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
