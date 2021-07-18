//APP - Calculadora
import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Display from './components/Display';
import Btn from './components/Botao';


let estados = {
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false,
}

export default function App() {
  const [vtela, setVtela] = useState(estados.valorTela);
  const [vres, setVres] = useState(estados.resultado);

  const addDigito = (d) => {
    if (d == '+' || d == '-' || d == '/' || d == '*') {
      estados.ponto = false
    }

    if (d == '.' && !estados.ponto) {
      estados.ponto = true
      estados.operado = false
    } else if (d == '.' && estados.ponto) {
      return
    }

    if ((d == '+' || d == '-' || d == '/' || d == '*') && estados.operado) {
      estados.valorTela = estados.resultado
      estados.resultado = 0
    }
    estados.valorTela = estados.valorTela + d;
    setVtela(estados.valorTela);
    setVres(estados.resultado);
    estados.operado = false;
  }

  const clearTela = () => {
    estados = {
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false
    }
    setVtela(estados.valorTela)
    setVres(estados.resultado)
  }

  const opera = (d) => {
    if (d == 'AC') {
      clearTela()
      return
    }
    if (d == 'BS') {
      estados.valorTela = vtela.substring(0, (vtela.length - 1))
      setVtela(estados.valorTela)
      return
    }
    try {
      estados.resultado = eval(estados.valorTela)
      estados.operado = true
      setVres(estados.resultado)
    } catch {
      estados.resultado = 'Erro'
      estados.operado = true
      setVres(estados.resultado)
    }
  }
  // const [valor1, setValor1] = useState(0);
  // const [valor2, setValor2] = useState(0);
  // const [resultado, setResultado] = useState(0);

  // const soma = () => {
  //   if (valor1 != '' && valor2 != '') {
  //     setResultado(parseInt(valor1) + parseInt(valor2));
  //   } else {
  //     alert('Insira os valores')
  //   }
  // }

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Calculadora</Text>
      <Display valor={estados.valorTela} res={estados.resultado} />
      <View style={estilos.botoes}>
        <Btn label="AC" ac aoClicar={() => { opera('AC') }} />
        <Btn label="(" aoClicar={() => { addDigito('(') }} />
        <Btn label=")" aoClicar={() => { addDigito(')') }} />
        <Btn label="/" operacao aoClicar={() => { addDigito('/') }} />
        <Btn label="7" aoClicar={() => { addDigito('7') }} />
        <Btn label="8" aoClicar={() => { addDigito('8') }} />
        <Btn label="9" aoClicar={() => { addDigito('9') }} />
        <Btn label="*" operacao aoClicar={() => { addDigito('*') }} />
        <Btn label="4" aoClicar={() => { addDigito('4') }} />
        <Btn label="5" aoClicar={() => { addDigito('5') }} />
        <Btn label="6" aoClicar={() => { addDigito('6') }} />
        <Btn label="-" operacao aoClicar={() => { addDigito('-') }} />
        <Btn label="1" aoClicar={() => { addDigito('1') }} />
        <Btn label="2" aoClicar={() => { addDigito('2') }} />
        <Btn label="3" aoClicar={() => { addDigito('3') }} />
        <Btn label="+" operacao aoClicar={() => { addDigito('+') }} />
        <Btn label="0" aoClicar={() => { addDigito('0') }} />
        <Btn label="." aoClicar={() => { addDigito('.') }} />
        <Btn label="<-" bs aoClicar={() => { opera('BS') }} />
        <Btn label="=" igual aoClicar={() => { opera('=') }} />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
