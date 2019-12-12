import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import SButton from '../component/SButton';
import Colors from '../constants/colors';
import BodyText from '../component/BodyText';
import TitleText from '../component/TitleText';
import MainButton from '../component/MainButton';

const GameOverScreen = ({
    numberOfRounds,
    userNumber,
    onRestart
}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over !.</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={onRestart}>New Game</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
       borderRadius: 150,
       borderWidth: 3,
       borderColor: 'black',
       width: 300,
       height: 300,
       overflow: 'hidden',
       marginVertical: 30
    },
    highlight: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
       textAlign: 'center',
       fontSize: 20
    }
});

export default GameOverScreen;