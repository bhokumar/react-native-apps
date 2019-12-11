import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';
import SButton from '../component/SButton';
import Colors from '../constants/colors';
import Directions from'../constants/directions';

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
    const [rounds, setRounds] = useState(0);

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    );

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
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
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRound => currentRound + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <SButton
                    title="LOWER"
                    onPress={() => {nextGuessHandler(Directions.LOWER)}}
                />
                <SButton
                     title="GREATER"
                     onPress={() => {nextGuessHandler(Directions.GREATER)}}
                />
            </Card>
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
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;