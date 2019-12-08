import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/component/Header';
import StartGameScreen from './src/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
        <Header title="Guess a number" />
        <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
