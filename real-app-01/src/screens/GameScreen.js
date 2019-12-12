import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';
import Directions from'../constants/directions';
import MainButton from '../component/MainButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = ({
    userChoice,
    onGameOver
}) => {
    const initialGuess = generateRandomBetween(1, 100, userChoice);

    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === Directions.LOWER && currentGuess < userChoice)
        || (direction === Directions.GREATER && currentGuess > userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
                {
                    text: 'Sorry!',
                    style: 'Cancel'
                 }
            ]);
            return;
        }

        if (direction === Directions.LOWER) {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        //setRounds(currentRound => currentRound + 1);
        setPastGuesses(currentPastGuesses => [nextNumber, ...currentPastGuesses])
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton
                    onPress={() => {nextGuessHandler(Directions.LOWER)}}
                ><Ionicons name="md-remove" size={24} color='white'/></MainButton>
                <MainButton
                     onPress={() => {nextGuessHandler(Directions.GREATER)}}
                ><Ionicons name="md-add" size={24} color='white'/></MainButton>
            </Card>
            <ScrollView>
    {pastGuesses.map(guess => <View key={guess}><Text>{guess}</Text></View>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: '',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen;