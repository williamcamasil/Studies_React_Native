//APP - Cara ou Coroa
import React, {useState} from 'react';
import {
  Text,
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

export default function App() {
  const moedas = [
    require('./assets/Images/moeda/m1.jpg'),
    require('./assets/Images/moeda/m5.jpg'),
    require('./assets/Images/moeda/m1.jpg'),
    require('./assets/Images/moeda/m2.jpg'),
    require('./assets/Images/moeda/m3.jpg'),
    require('./assets/Images/moeda/m4.jpg'),
    require('./assets/Images/moeda/m5.jpg'),
    require('./assets/Images/moeda/m6.jpg'),
    require('./assets/Images/moeda/m7.jpg'),
    require('./assets/Images/moeda/m8.jpg'),
  ];
  let iMoeda = 0;
  const maxGiros = 20;

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function girarMoeda() {}

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Cara ou Coroa</Text>
      <Image source={moedaAtual} />
      <Button title="Girar" onPress={() => {}} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
