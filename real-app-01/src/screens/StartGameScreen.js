import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Card from '../component/Card';
import SButton from '../component/SButton';
import Colors from '../constants/colors';
import Input from '../component/Input';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLenght={2}
                />
                <View style={styles.buttonContainer}>
                    <SButton
                        title="Reset"
                        onPress={() => {}} color={Colors.accent}
                    />
                    <SButton
                        title="Confirm"
                        onPress={() => {}} color={Colors.primary}
                    />
                </View>
            </Card>
        </View>
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
        marginVertical: 10
    },
    input: {
        width: 50
    }
});

export default StartGameScreen;