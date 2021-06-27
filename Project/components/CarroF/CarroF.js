import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function CarroF(props) {
  const [ligado, setligado] = useState(false);
  return (
    <View>
      <Text>
        Carro: {props.nome} - Ligado: {ligado ? 'Sim' : 'Não'}
      </Text>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setligado(!ligado)}
      />
    </View>
  );
}

/*
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function App1() {
  return (
    <View>

    </View>
  );
}
*/
