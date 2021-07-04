//APP - Calcular combustivel

import React, {useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Gasolina from './combustivelcomponent/Gasolina/Gasolina';
import Etanol from './combustivelcomponent/Etanol/Etanol';
import BtnCalcular from './combustivelcomponent/BtnCalcular/BtnCalcular';
import Resultado from './combustivelcomponent/Resultado/Resultado';
import ImageResultado from './combustivelcomponent/ImageResultado/ImageResultado';

export default function App() {
  const [gasolina, setGasolina] = useState(0);
  const [etanol, setEtanol] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (!gasolina) {
      alert('Informe o preço da Gasolina');
      return;
    }
    if (!etanol) {
      alert('Informe o preço do Etanol');
      return;
    }

    let res;
    let calc = ((etanol / gasolina) * 100).toFixed(1);

    if (calc > 70) {
      res = 'Gasolina';
    } else {
      res = 'Etanol';
    }

    alert(
      'O Etanol está cusatando ' +
        calc +
        '% da Gasolina. Portanto é melhor abastecer com ' +
        res,
    );

    setResultado(res);
  };

  const limpar = () => {
    setResultado('');
  };

  const setarGasolina = v => {
    limpar();
    setGasolina(v);
  };

  const setarEtanol = v => {
    limpar();
    setEtanol(v);
  };

  return (
    <SafeAreaView style={estilos.principal}>
      <Gasolina modificarGasolina={setarGasolina} />
      <Etanol modificarEtanol={setarEtanol} />
      <BtnCalcular btnpress={calcular} />
      <Resultado mostrar={resultado} />
      <ImageResultado comb={resultado.charAt(0)} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  principal: {
    padding: 10,
  },
});
