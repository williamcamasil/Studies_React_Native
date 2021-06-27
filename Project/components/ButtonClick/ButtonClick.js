import React from 'react';
import {Button, Alert, View} from 'react-native';

function msg() {
  Alert.alert('Titulo', 'Cliquei no botão');
}

export default function ButtonClick() {
  return (
    <View>
      <Button
        title="Mostrar mensagem"
        onPress={() => Alert.alert('Titulo', 'Cliquei no botão')}
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Show"
        onPress={msg}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
