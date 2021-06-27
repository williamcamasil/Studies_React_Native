import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

export default function CaixaDeTexto(props) {
  const [nome, setnome] = useState('');

  return (
    <View>
      <Text>Digite seu nome: </Text>
      <TextInput
        style={{borderWidth: 1, borderBottomColor: '#000'}}
        value={nome}
        onChangeText={text => setnome(text)}
        // autoCapitalize="characters"
        // multiline="true"
      />
      <Text>Texto digitado: {nome}</Text>
    </View>
  );
}
