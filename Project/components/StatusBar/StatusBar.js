import React, {useState} from 'react';
import {Text, SafeAreaView, StatusBar, Button} from 'react-native';

//RefreshControl é o componente de atualiazando a página quando arrasta para baixo ele aparece

export default function CaixaDeTexto(props) {
  const [cor, setCor] = useState('black');

  const changeStatuBarColor = corStatus => {
    setCor(corStatus);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={cor}
        barStyle="default"
        hidden={false}
        animated={true}
        networkActivityIndicatorVisible={false}
        translucent={false}
      />
      <Text style={{color: '#000'}}>TESTE</Text>
      <Button title="Vermelho" onPress={() => changeStatuBarColor('red')} />
      <Button title="Azul" onPress={() => changeStatuBarColor('blue')} />
      <Button title="Verde" onPress={() => changeStatuBarColor('green')} />
    </SafeAreaView>
  );
}
