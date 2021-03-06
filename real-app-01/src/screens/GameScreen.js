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
    ScrollView,
    FlatList
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';
import Directions from'../constants/directions';
import MainButton from '../component/MainButton';
import BodyText from '../component/BodyText';

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
const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);
const GameScreen = ({
    userChoice,
    onGameOver
}) => {
    const initialGuess = generateRandomBetween(1, 100, userChoice);

    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
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
        setPastGuesses(currentPastGuesses => [nextNumber.toString(), ...currentPastGuesses])
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
            <View style={styles.listContainer}>
                {/*<ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
    </ScrollView>*/}
            <FlatList
                keyExtractor={item => item}
                data={pastGuesses}
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={styles.list}
            />
            </View>
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
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%'
    },
    listContainer: {
        width: '62%',
        flexGrow: 1
    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default GameScreen;