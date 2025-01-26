import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
import { FavoriteContext } from '../store/context/favorite-context';

function FavoritesScreen() {
  const { ids } = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals yet. Start adding some!</Text>
      </View>
    );
  }

  return (
    <MealsList items={favoriteMeals} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default FavoritesScreen;