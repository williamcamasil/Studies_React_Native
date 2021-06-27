import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import Styles from '../../styles/styles';

export default function States() {
  //const imgbg1 = './assets/Images/backsmart.jpg';

  const [ligado, setligado] = useState(true);

  return (
    <View style={Styles.container}>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setligado(!ligado)}
      />

      {ligado ? <Text>Algo</Text> : <Text>Algo 2</Text>}
    </View>
  );
}
