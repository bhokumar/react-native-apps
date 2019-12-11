import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Header from './src/component/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading
                    startAsync={fetchFonts}
                    onFinish={() => {setDataLoaded(true)}}
                    onError={(error) => console.log(error)}
                />
    }

    const gameOverHandler = numberOfRounds => {
        setGuessRounds(numberOfRounds);
    }

    const startGameHandler = selectNumber => {
        setUserNumber(selectNumber);
        setGuessRounds(0);
    }

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen
                    userChoice={userNumber}
                    onGameOver={gameOverHandler}
                />
    } else if (guessRounds > 0) {
        content = <GameOverScreen
                    userNumber={userNumber}
                    numberOfRounds={guessRounds}
                    onRestart={configureNewGameHandler}
                />;
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
