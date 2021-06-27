import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';

export default function () {
  const [visivel, setVisivel] = useState(true);

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visivel}
        style={{}}>
        <View style={estilos.modal}>
          <Text style={estilos.textoModal}>CFB Cursos</Text>
          <Text style={estilos.textoModal}>Curso de React Native</Text>
          <Button title="Fechar" onPress={() => setVisivel(false)} />
        </View>
      </Modal>
      <Button title="Mostrar" onPress={() => setVisivel(true)} />
    </View>
  );
}

const estilos = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
  },
  textoModal: {
    color: '#fff',
  },
});
