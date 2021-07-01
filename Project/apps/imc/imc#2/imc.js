//APP - IMC

import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import Peso from './newcomponents/Peso/Peso';
import Altura from './newcomponents/Altura/Altura';
import BotaoCalc from './newcomponents/BotaoCalc/BotaoCalc';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const imcCalc = () => {
    if (peso == 0 || !peso) {
      alert('Informe o Peso');
      return;
    }

    if (altura == 0 || !altura) {
      alert('Informe a Altura');
      return;
    }

    const r = peso / Math.pow(altura, 2);
    setResultado(r.toFixed(1));
  };

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>

      {/* Passando método por props */}
      <Peso estilos={estilos} modificarPeso={setPeso} />
      <Altura estilos={estilos} modificarAltura={setAltura} />
      <BotaoCalc estilos={estilos} calcular={imcCalc} />

      <View style={estilos.bloco}>
        <Text>Resultado: {resultado}</Text>
      </View>

      <Image
        style={estilos.img}
        source={require('./assets/Images/tabela_imc.png')}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  corpo: {
    padding: 10,
  },
  bloco: {
    marginBottom: 10,
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
  img: {
    marginTop: 10,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
