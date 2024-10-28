import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userChoice, onGameOver, roundsNumber, setRoundsNumber }) {
    const [opponentGuess, setOpponentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    );

    const [guessedNumbers, setGuessedNumbers] = useState([opponentGuess]);

    useEffect(() => {
        if (opponentGuess === userChoice) {
            onGameOver();
        }
    }, [opponentGuess, userChoice, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    useEffect(() => {
        setRoundsNumber((curRounds) => curRounds + 1);
    }, [opponentGuess]);

    function nextGuessHandler(direction) {
        if (
            (direction === "lower" && opponentGuess < userChoice) ||
            (direction === "greater" && opponentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }


        if (direction === "lower") {
            maxBoundary = opponentGuess;
        } else {
            minBoundary = opponentGuess + 1;
        }
        const nextNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            opponentGuess
        );
        setGuessedNumbers((curGuessedNumbers) => [nextNumber, ...curGuessedNumbers]);
        setOpponentGuess(nextNumber);
    }

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Opponent's Guess</Title>
            <NumberContainer>{opponentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                        <Ionicons name="remove" size={24}/>
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                        <Ionicons name="add" size={24}/>
                    </PrimaryButton>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessedNumbers.map((number) => (<Text key={number}>{number}</Text>))} */}
                <FlatList 
                    data={guessedNumbers}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <GuessLogItem>{item}</GuessLogItem>
                    )}
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 16,
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 24,
        width: '100%'
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});
export default GameScreen;