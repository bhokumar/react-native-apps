import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = ({
    addGoalHandler,
    visible,
    onCancel
}) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={visible}>
            <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Course goal"
                        style={styles.textInput}
                        onChangeText={goalInputHandler}
                        value={enteredGoal}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title="ADD"
                            onPress={() => addGoalHandler(enteredGoal)}
                        />
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={onCancel}
                        />
                    </View>
            </View>
        </Modal>
    )};

    const styles = StyleSheet.create({
        inputContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        textInput: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            width: '80%',
            marginBottom: 10
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: '60%'
        }
    });

export default GoalInput;