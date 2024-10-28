import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ text, id, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem} >
        <Pressable 
          android_ripple={{color: '#dddddd'}} 
          onPress={deleteGoalHandler.bind(this, id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{text}</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#ccc',
        borderColor: 'black',
        color: 'white',
        borderWidth: 1,
        marginVertical: 8
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        padding: 8,
        color: 'white'
      }
});
export default GoalItem;