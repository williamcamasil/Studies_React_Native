import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default props => {
  return (
    <View style={props.estilos.bloco}>
      <TouchableHighlight
        style={props.estilos.btnCalc}
        onPress={props.calcular}>
        <Text style={props.estilos.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  );
};
