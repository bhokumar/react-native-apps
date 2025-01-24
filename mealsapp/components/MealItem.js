import { useNavigation } from "@react-navigation/native";

import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform
} from "react-native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, duration, complexity, affordability, imageUrl }) {
    const navigation = useNavigation();
   
    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id,
            mealTitle: title
        });
    }

  return (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={selectMealItemHandler}>
           <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
           </View>
        </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    innerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 8,
    }
});

export default MealItem;