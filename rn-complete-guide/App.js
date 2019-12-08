import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button
} from 'react-native';

import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setAddMode] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
    }

    const cancelGoalAdditionHandler = () => {
        setAddMode(false);
    }

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => goalId != goal.id)
        });
    }

  return (
    <View style={styles.screen}>
        <Button title="Add Goal" onPress={() => setAddMode(true)}/>
        <GoalInput
            addGoalHandler={addGoalHandler}
            visible={isAddMode}
            onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={itemData => (
                <GoalItem
                    title={itemData.item.value}
                    onDelete={() => removeGoalHandler(itemData.item.id)}
                />
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
