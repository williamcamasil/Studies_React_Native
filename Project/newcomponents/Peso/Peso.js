import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={props.estilos.bloco}>
      <Text>Informe seu Peso:</Text>
      <TextInput
        style={props.estilos.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        //value={peso}
        onChangeText={text => props.modificar(text)}
      />
    </View>
  );
};
