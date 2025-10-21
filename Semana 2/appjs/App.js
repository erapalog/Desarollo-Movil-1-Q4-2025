import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

   
  let persona='Maria Garcia'

  console.log(persona);

  persona= 78

  console.log(persona)

  persona=[1,2,4,5,5,6]
   
  console.log(persona[2])

  for(let x of persona)
    console.log(x);


  function devolverNombre(a){
    return 0
  }

  return (
    <View style={styles.container}>
      <Text>Primera aplicacion en Recat Native</Text>
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
