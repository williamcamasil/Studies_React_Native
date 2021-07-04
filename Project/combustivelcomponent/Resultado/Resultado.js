import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={estilos.bloco}>
      <Text>Melhor combustível: {props.mostrar}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
});
