import { Button } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { FavoriteContext } from '../store/context/favorite-context';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailsScreen({ route, navigation }) {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    //const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const mealIsFavorite = favoriteMealIds.includes(mealId);
  
    const dispatch = useDispatch();


    //const mealIsFavorite = ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        onPress={changeFavoriteStatusHandler}
                        color="white"
                    />
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

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