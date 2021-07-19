//APP - Fetch
//api GET - https://cfbcursos.com.br/filmes.json

import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

export default function App() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://cfbcursos.com.br/filmes.json')
      .then(resp => resp.json())
      .then(json => setDados(json.filmes))
      .catch(() => alert('Erro ao carregar lista de filmes'))
      .finally(() => setCarregando(false));
  }, []);

  // useEffect(() => {
  //   alert('Teste');
  // });

  return (
    <View>
      <Text>Armazenamento local / Async-Storage</Text>
      {carregando ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dados}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.titulo}, {item.AnoLancamento}
            </Text>
          )}
        />
      )}
    </View>
  );
}
