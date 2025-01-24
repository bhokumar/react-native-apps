import { useLayoutEffect } from 'react';
import { View, FlatList,  StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
    
    useLayoutEffect(() => {
        const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

        navigation.setOptions({
            title: selectedCategory.title,
        });
    }, [categoryId, navigation]);
    
    function renderMealItem(itemData) {
        const item = {
            id: itemData.item.id,
            title: itemData.item.title,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            imageUrl: itemData.item.imageUrl,
        };

        return (
            <MealItem {...item} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default MealsOverviewScreen;