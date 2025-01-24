import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {

        function onPressHandler() {
            console.log('Category selected!');
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title
            });
        }
    
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={onPressHandler}
            />
        );
    }

  return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={item => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData)}
        numColumns={2}
    />
  );
}

export default CategoriesScreen;