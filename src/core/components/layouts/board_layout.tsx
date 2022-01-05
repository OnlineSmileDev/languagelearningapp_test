import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

interface Props {
  backgroundColor: string,
  children: JSX.Element[] | JSX.Element
}

export const BoardLayout = (props: Props) : JSX.Element => {
  const { children, backgroundColor } = props;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height * 0.8,
    borderRadius: 32,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})