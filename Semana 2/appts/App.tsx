import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Animal } from './Modelos/Animal';



export default function App() {

  let persona: string = 'Maria Perez';

  console.log('Nombre persona', persona)


  type operaciones = 'suma' | 'resta' | 'multiplicar';

  function operaciones(a: number, b: number, op: operaciones): number {

    let resultado: number = 0;
    if (op == 'suma')
      resultado = a + b
    if (op == 'resta')
      resultado = a - b
    if (op === 'multiplicar')
      resultado = a * b

    return resultado
  }


  console.log('El resultado de la operacion es: ', operaciones(2, 5, 'suma'))

  let animalDomestico: Animal = {
    peso: 19,
    estatura: 1,
    nombre: 'Zeus'
  }

  console.log(animalDomestico)


  let listaAnimales: Animal[] = [{
    peso: 1,
    estatura: 2,
    nombre: 'akira'
  },
  {
    peso: 1,
    estatura: 2,
    nombre: 'akira'
  },
  {
    peso: 1,
    estatura: 2,
    nombre: 'akira'
  },
  {
    peso: 1,
    estatura: 2,
    nombre: 'akira',
    raza:'kjkjlkjl'
  }];



  for (let x of listaAnimales)
    console.log('Objeto de la lista' , x)


  return (
    <View style={styles.container}>
      <Text>Primera aplicacion en React Native con typescript!</Text>
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
