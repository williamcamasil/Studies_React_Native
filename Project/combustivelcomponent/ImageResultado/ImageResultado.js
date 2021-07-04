import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default props => {
  return (
    <View style={estilos.bloco}>
      {props.comb == '' ? (
        <Image
          style={estilos.img}
          source={require('../../assets/Images/gasolina.png')}
        />
      ) : props.comb == 'G' ? (
        <Image
          style={estilos.img}
          source={require('../../assets/Images/gasolina.png')}
        />
      ) : (
        <Image
          style={estilos.img}
          source={require('../../assets/Images/gasolina.png')}
        />
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
  img: {
    marginTop: 10,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
