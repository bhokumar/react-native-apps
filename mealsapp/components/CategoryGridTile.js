import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function CategoryGridTile(props) {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
    }
});

export default CategoryGridTile;