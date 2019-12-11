import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../component/Card';
import SButton from '../component/SButton';
import Colors from '../constants/colors';
import Input from '../component/Input';
import NumberContainer from '../component/NumberContainer';
import BodyText from '../component/BodyText';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99',
                [
                    {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }
            ]
                );
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <BodyText>You Selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <SButton
                title="START GAME"
                onPress={() => props.onStartGame(selectedNumber)}
                color={Colors.accent}
            />
        </Card>
    );
}

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
        <View style={styles.screen}>
            <Text>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <BodyText>Select a number</BodyText>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLenght={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <SButton
                        title="Reset"
                        onPress={resetInputHandler}
                        color={Colors.accent}
                    />
                    <SButton
                        title="Confirm"
                        onPress={confirmInputHandler}
                        color={Colors.primary}
                    />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
       elevation: 5,
       padding: 20,
       borderRadius: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    input: {
        width: 50
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;