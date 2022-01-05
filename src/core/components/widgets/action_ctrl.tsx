import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { Sentence } from '../../apis';
import { DisabledColor } from '../../interfaces';


interface Props {
  sentence: Sentence;
  selectedWord: string | undefined;
}

enum CtrlStatus {
  Idle = 1,
  Checking,
  Correct,
  Wrong
}

export const ActionCtrl = (props: Props) : JSX.Element => {
  
  const { sentence, selectedWord } = props;

  const status = selectedWord ? CtrlStatus.Checking : CtrlStatus.Idle;

  return (
    <View style={styles.actionCtrlContainer}>
      <TouchableOpacity style={[styles.actionButtonContainer]}>
        <Text style={styles.actionButtonText}>{ selectedWord ? 'check answer' : 'continue' }</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  actionCtrlContainer: {
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center'
  },
  actionButtonContainer: {
    width: Dimensions.get('window').width - 40,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: DisabledColor,
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase'
  }
})