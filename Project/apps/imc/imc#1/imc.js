//APP - IMC

import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';

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

      <View style={estilos.bloco}>
        <Text>Informe seu Peso:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          value={peso}
          onChangeText={text => setPeso(text)}
        />
      </View>

      <View style={estilos.bloco}>
        <Text>Informe sua Altura:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType={'numeric'}
          value={altura}
          onChangeText={text => setAltura(text)}
        />
      </View>

      <View style={estilos.bloco}>
        <TouchableHighlight style={estilos.btnCalc} onPress={imcCalc}>
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>

      <View style={estilos.bloco}>
        <Text>Resultado: {resultado}</Text>
      </View>

      <Image
        style={estilos.logo}
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
  logo: {
    marginTop: 10,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
