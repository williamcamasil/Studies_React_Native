import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

//Componente de Classe
export default function (props) {
  return (
    <View>
      <Image style={estilos.logo} source={require('../../assets/people.png')} />
      {/* <Image style={estilos.logo} source={{uri:'https://'}} />  IMAGE FROM URI*/}
    </View>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 250,
    resizeMode: 'contain',
  },
});
