import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/component/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = selectNumber => {
        setUserNumber(selectNumber);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber) {
        content = <GameScreen userChoice={userNumber}/>
    }

  return (
    <View style={styles.screen}>
        <Header title="Guess a number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
