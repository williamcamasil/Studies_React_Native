import React, {useState} from 'react';
import {ScrollView, Text, View, RefreshControl} from 'react-native';

//RefreshControl é o componente de atualiazando a página quando arrasta para baixo ele aparece

export default function CaixaDeTexto(props) {
  const [atualizando, setAtualizando] = useState(false);

  const aoAtualizar = () => {
    setAtualizando(true);

    //Código de atualização

    setTimeout(() => {
      setAtualizando(false);
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: '#333', padding: 15}}
        refreshControl={
          <RefreshControl refreshing={atualizando} onRefresh={aoAtualizar} />
        }>
        <Text style={{color: '#eee'}}>
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It's not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.” As Cicero would put it, “Um, not so fast.” The placeholder
          text, beginning with the line “Lorem ipsum dolor sit amet, consectetur
          adipiscing elit”, looks like Latin because in its youth, centuries
          ago, it was Latin. Richard McClintock, a Latin scholar from
          Hampden-Sydney College, is credited with discovering the source behind
          the ubiquitous filler text. In seeing a sample of lorem ipsum, his
          interest was piqued by consectetur—a genuine, albeit rare, Latin word.
          Consulting a Latin dictionary led McClintock to a passage from De
          Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
          first-century B.C. text from the Roman philosopher Cicero. Until
          recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It's not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.” As Cicero would put it, “Um, not so fast.” The placeholder
          text, beginning with the line “Lorem ipsum dolor sit amet, consectetur
          adipiscing elit”, looks like Latin because in its youth, centuries
          ago, it was Latin. Richard McClintock, a Latin scholar from
          Hampden-Sydney College, is credited with discovering the source behind
          the ubiquitous filler text. In seeing a sample of lorem ipsum, his
          interest was piqued by consectetur—a genuine, albeit rare, Latin word.
          Consulting a Latin dictionary led McClintock to a passage from De
          Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
          first-century B.C. text from the Roman philosopher Cicero. Until
          recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It's not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.” As Cicero would put it, “Um, not so fast.” The placeholder
          text, beginning with the line “Lorem ipsum dolor sit amet, consectetur
          adipiscing elit”, looks like Latin because in its youth, centuries
          ago, it was Latin. Richard McClintock, a Latin scholar from
          Hampden-Sydney College, is credited with discovering the source behind
          the ubiquitous filler text. In seeing a sample of lorem ipsum, his
          interest was piqued by consectetur—a genuine, albeit rare, Latin word.
          Consulting a Latin dictionary led McClintock to a passage from De
          Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
          first-century B.C. text from the Roman philosopher Cicero. Until
          recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It's not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.” As Cicero would put it, “Um, not so fast.” The placeholder
          text, beginning with the line “Lorem ipsum dolor sit amet, consectetur
          adipiscing elit”, looks like Latin because in its youth, centuries
          ago, it was Latin. Richard McClintock, a Latin scholar from
          Hampden-Sydney College, is credited with discovering the source behind
          the ubiquitous filler text. In seeing a sample of lorem ipsum, his
          interest was piqued by consectetur—a genuine, albeit rare, Latin word.
          Consulting a Latin dictionary led McClintock to a passage from De
          Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
          first-century B.C. text from the Roman philosopher Cicero.
        </Text>
      </ScrollView>
    </View>
  );
}
