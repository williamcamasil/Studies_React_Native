import React from 'react';
import {View, Text} from 'react-native';

function exibir(vp1) {
  if (vp1) {
    return <Text>Curso de React Native</Text>;
  } else {
    return <Text>- - - -</Text>;
  }
}

//Arrow function
const exibirTexto = vp1 => {
  if (vp1) {
    return <Text>Curso de React Native Arrow Function</Text>;
  } else {
    return <Text>- - - -</Text>;
  }
};

// function dobro(n) {
//   return n * 2;
// }

const dobro = n => {
  return n * 2;
};

export default function Funcoes() {
  let exibirTextoBloco = true;
  return (
    <View>
      {/* <Text>{dobro(2)}</Text> */}
      {/* {exibir(true)} */}
      {/* {exibirTexto(true)} */}
      {/* {exibirTextoBloco ? <Text>Mensagem em bloco</Text> : <Text>- - -</Text>} */}
      {exibirTextoBloco && (
        <Text>Mensagem em bloco sem ternario e só se for true</Text>
      )}
    </View>
  );
}
