import React, { useState } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    StyleSheet, 
    Modal,
    Image
} from 'react-native';

function GoalInput({ onAddGoal, isAddMode, setIsAddMode }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoal() {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={isAddMode} >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
            placeholder="Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Cancel" color="#f31282" onPress={() => setIsAddMode(false)} />
            </View>
            <View style={styles.button}>
                <Button title="Add" onPress={addGoal} color="#b180f0" />  
            </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 200,
        height: 200,
        margin: 20,
      },
      textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      button: {
        width: '40%',
        padding: 8
      }
});

export default GoalInput;