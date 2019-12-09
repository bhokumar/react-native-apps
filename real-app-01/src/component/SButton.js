import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default SButton = (props) => {
    return(
        <View style={styles.buttonContainer}>
            <Button {...props}/>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100
    }
});