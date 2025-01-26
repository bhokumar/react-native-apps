import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../MealsList/MealItem';

function MealsList({ items }) {
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
                data={items}
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

export default MealsList;

