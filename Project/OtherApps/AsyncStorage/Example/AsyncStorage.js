//APP - AsyncStorage

/*
npm install @react-native-community/async-storage
yarn add @react-native-community/async-storage
*/

import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [curso, setCurso] = useState(null);

  const Armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor);
  };

  const Buscar = async chave => {
    const valor = await AsyncStorage.getItem(chave);
    setCurso(valor);
  };

  Armazenar('01', 'React Native');
  Armazenar('02', 'JavaScript');
  Armazenar('03', 'C++');
  Armazenar('04', 'HTML + CCS');

  //AsyncStorage.clear();
  //AsyncStorage.removeItem('03');

  Buscar('04');

  return (
    <View>
      <Text>Armazenamento local / Async-Storage</Text>
      <Text>Curso de {curso}</Text>
    </View>
  );
}
