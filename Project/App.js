import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
// import ButtonClick from './components/ButtonClick/ButtonClick';
// import Caixas from './components/Caixas/Caixas';
// import Lista from './components/Lista/Lista';
// import Funcoes from './components/Funcoes/Funcoes';
// import Imagescs from './components/Imagescs/Imagescs';
// import States from './components/States/States';
// import CarroF from './components/CarroF/CarroF';
// import SwitchF from './components/SwitchF/SwitchF';
// import CaixaDeTexto from './components/CaixaDeTexto/CaixaDeTexto';
// import Rolagem from './components/Rolagem/Rolagem';
// import Toque from './components/Toque/Toque';
import StatusBar from './components/StatusBar/StatusBar';
// import ModalComponente from './components/ModalComponente/ModalComponente';
import Styles from './styles/styles';

//Componente de Classe
export default function App1() {
  //const imgbg1 = './assets/Images/backsmart.jpg';
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar />
    </SafeAreaView>
  );
}

// const estilos = StyleSheet.create({
//   imagemFundo: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
// });

/* <View style={Styles.container}>
  <ImageBackground source={require(imgbg1)} style={estilos.imagemFundo}>
    <Text style={Styles.textTitulo}>Olá Mundo!</Text>
    <ButtonClick />
    <Imagescs />
    <Caixas />
    <Funcoes />
    <Lista />
    <States />
    <CarroF nome="Celta" />
    <SwitchF />
    <CaixaDeTexto />
    <Rolagem />
    <Toque />
    <ModalComponente />
  </ImageBackground>
</View>; */
