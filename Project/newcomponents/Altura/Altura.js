import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={props.estilos.bloco}>
      <Text>Informe sua Altura:</Text>
      <TextInput
        style={props.estilos.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        //value={peso}
        onChangeText={text => props.modificarAltura(text)}
      />
    </View>
  );
};
