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
      <Button title="Tela Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
