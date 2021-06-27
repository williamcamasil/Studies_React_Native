import React from 'react';
import {View} from 'react-native';

//Componente de Classe
export default function (props) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: 300,
        flexWrap: 'wrap',
      }}>
      <View style={{width: 85, height: 50, backgroundColor: '#00f'}} />
      <View style={{width: 85, height: 50, backgroundColor: '#00a'}} />
      <View style={{width: 85, height: 50, backgroundColor: '#005'}} />
      <View style={{width: 85, height: 50, backgroundColor: '#f00'}} />
      <View style={{width: 85, height: 50, backgroundColor: '#a00'}} />
      <View style={{width: 85, height: 50, backgroundColor: '#500'}} />
    </View>
  );
}

// export default function (props) {
//     return (
//       <View
//         style={{
//           width: '100%',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100%',
//         }}>
//         <View style={{width: 50, height: 50, backgroundColor: '#00f'}} />
//         <View style={{width: 50, height: 50, backgroundColor: '#00a'}} />
//         <View style={{width: 50, height: 50, backgroundColor: '#005'}} />
//       </View>
//     );
//   }
