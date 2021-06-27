import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default function Toque(props) {
  const [cont, setCont] = useState(0);
  const contar = () => {
    setCont(cont + 1);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableHighlight
        style={estilos.botao}
        onPress={contar}
        underlayColor="#008">
        <Text>CLIQUE AQUI</Text>
      </TouchableHighlight>

      <TouchableOpacity style={estilos.botao} onPress={contar}>
        <Text>CLIQUE AQUI</Text>
      </TouchableOpacity>
      <Text>{cont}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
  },
});
