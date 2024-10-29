import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({children}) {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.guessLogText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogItem: {
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  guessLogText: {
    color: Colors.accent500,
    fontSize: 16,
    fontFamily: 'open-sans-bold',
  },
});
export default GuessLogItem;