//Navigation passando parametros entras as telas

import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Pilha = createStackNavigator();

function TelaHome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Tela Canal" onPress={() => navigation.navigate('Canal')} />
    </View>
  );
}

function TelaCanal({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Canal Screen</Text>
      <Button title="Tela Home" onPress={() => navigation.navigate('Cursos')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TelaCursos({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cursos Screen</Text>
      <Button
        title="Tela Cursos"
        onPress={() =>
          navigation.navigate('ReactNative', {aulas: 100, autor: 'Bruno'})
        }
      />
    </View>
  );
}

function TelaCursoReactNative({route, navigation}) {
  //const {aulas} = route.params;
  //const {autor} = route.params;
  const aulas = route.params.aulas;
  const autor = route.params.autor;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaCanal">
        <Pilha.Screen
          name="Home"
          component={TelaHome}
          options={{title: 'Tela Inicial'}}
        />

        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{title: 'Tela Canal'}}
        />

        <Pilha.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title: 'Tela Cursos'}}
        />

        <Pilha.Screen
          name="ReactNative"
          component={TelaCursoReactNative}
          options={{title: 'Tela Cursos'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
