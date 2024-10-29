import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  const { width } = useWindowDimensions();

  const containerPadding = width < 400 ? 12 : 24;
  const containerMargin = width < 400 ? 12 : 24;
  const textFontSize = width < 400 ? 28 : 36;
  return (
    <View style={[styles.container, { padding: containerPadding, margin: containerMargin }]}>
      <Text style={[styles.numberText, {fontSize: textFontSize}]}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
  },
});

export default NumberContainer;