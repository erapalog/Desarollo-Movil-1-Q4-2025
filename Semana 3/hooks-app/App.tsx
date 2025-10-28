import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HooksComponente from './Componentes/HooksComponente';
import ListaEstudianteComponent from './Componentes/ListaEstudianteComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Trabajando con Hooks</Text>
      {/*<HooksComponente></HooksComponente>*/}
      <ListaEstudianteComponent></ListaEstudianteComponent>
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
