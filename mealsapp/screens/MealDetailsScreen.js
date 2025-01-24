import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

function MealDetailsScreen({ route }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability}
            textStyle={styles.textDetails} 
        />
       <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    rootContainer: {
       marginBottom: 32,
    },
    textDetails: {
        color: 'white',
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center',
    }
});

export default MealDetailsScreen;