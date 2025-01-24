import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
    return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e2b497',
        textAlign: 'center',
        
    },
    subTitleContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
});

export default Subtitle;