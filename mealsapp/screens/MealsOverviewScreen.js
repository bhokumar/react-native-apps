import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
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
    
    return <MealsList items={displayedMeals} />;
}


export default MealsOverviewScreen;