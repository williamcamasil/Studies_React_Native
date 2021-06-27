//Navigation inserindo tab navigator para navegação por tabs
//yarn add @react-navigation/bottom-tabs

import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Guias = createBottomTabNavigator();

function TelaHome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function TelaCanal({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Canal Screen</Text>
    </View>
  );
}

function TelaCursos({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cursos Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName="TelaCanal">
        <Guias.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#008',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />

        <Guias.Screen
          name="Canal"
          component={TelaCanal}
          options={{title: 'Tela Canal'}}
        />

        <Guias.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title: 'Tela Cursos'}}
        />
      </Guias.Navigator>
    </NavigationContainer>
  );
}
