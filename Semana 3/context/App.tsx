import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Consumidor from './Componentes/Consumidor';
import Consumidor2 from './Componentes/Consumidor2';
import Consumidor1 from './Consumer/Consumidor1';
import ProviderOperaciones from './Providers/ProviderOperaciones';
import Consumidor3 from './Consumer/Consumidor3';


//
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Trabajando con contextos</Text>

      {/*<Consumidor></Consumidor>

      <Consumidor2></Consumidor2>*/}

      <ProviderOperaciones>     
          <Consumidor1></Consumidor1>
          <Consumidor3></Consumidor3>
      </ProviderOperaciones>

      
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
