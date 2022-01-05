import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  ScrollView 
} from 'react-native';
import { 
  AppLayout, 
  BoardLayout,
  EnglishSentence,
  CoordinateWords,
  DutchSentence,
  ActionCtrl
} from '../../../core/components';
import { ScreenColor, ContentColor } from '../../../core/interfaces';
import { Sentence, useApi } from '../../../core/apis';

interface BoardProps {
  sentence: Sentence,
  onSelected: (word : string) => void
}

const Board = (props: BoardProps) : JSX.Element => {
  const { sentence, onSelected } = props;
  const [selectedWord, setSelectedWord] = useState<string | undefined>(undefined);

  return (
    <View style={styles.boardContainer}>
      <EnglishSentence highlight={sentence.highlightPosition} words={sentence.words} />
      <DutchSentence 
        sentence={sentence}
        selectedWord={selectedWord}
      />
      <CoordinateWords 
        words={sentence.coordinates}
        selectedWord={selectedWord}
        onItemClick={(word) => {
          setSelectedWord(word);
          onSelected(word);
        }}
      />
    </View>
  );
}



export const BoardScreen = (): JSX.Element => {

  const { loading, data } = useApi('sentences');
  const [ currentSentence, setCurrentSentence ] = useState<Sentence>(data[0]);
  const [ selectedWord, setSelectedWord ] = useState<string | undefined>(undefined);

  return (
    <AppLayout backgroundColor={ScreenColor}>
      <View style={styles.container}>
        <BoardLayout backgroundColor={ContentColor}>
          <View style={styles.boardContainer}>
            <Text style={styles.description}>Fill in the missing word</Text>
            <ScrollView horizontal={true}>
              { data.map((sentence) => <Board sentence={sentence} onSelected={(word) => {
                setSelectedWord(word);
              }} />) }
            </ScrollView>
          </View>
          <ActionCtrl 
            sentence={currentSentence} 
            selectedWord={selectedWord}
          />
        </BoardLayout>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  description: {
    fontSize: 14,
    color: '#fff'
  },
  boardContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  }
})
