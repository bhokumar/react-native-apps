import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  function pickedGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setIsGameOver(false);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundsNumber(0);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedGameHandler} />;

  if (userNumber) {
    if (isGameOver) {
      screen = <GameOverScreen 
                  userNumber={userNumber} 
                  roundsNumber={roundsNumber}
                  onStartNewGame={startNewGameHandler}
                />;
    } else {
      screen = <GameScreen 
                onGameOver={gameOverHandler} 
                userChoice={userNumber}
                setRoundsNumber={setRoundsNumber}
                roundsNumber={roundsNumber}
              />;
    }
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode='cover' 
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
   opacity: 0.15
  }
});