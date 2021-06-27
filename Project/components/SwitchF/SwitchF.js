import React, {useState} from 'react';
import {Text, View, Switch} from 'react-native';

export default function SwitchF(props) {
  const [ligado, setligado] = useState(false);

  const toggleLigado = () => setligado(!ligado);

  return (
    <View>
      <Text>
        Carro: {props.nome} - Ligado: {ligado ? 'Sim' : 'Não'}
      </Text>
      <Switch
        trackColor={{false: '#777', true: '#8bf'}}
        thumbColor={ligado ? '#00f' : '#444'}
        value={ligado}
        onValueChange={toggleLigado}
      />
    </View>
  );
}
