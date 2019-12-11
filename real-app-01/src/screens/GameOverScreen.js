import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import SButton from '../component/SButton';
import Colors from '../constants/colors';
import BodyText from '../component/BodyText';
import TitleText from '../component/TitleText';

const GameOverScreen = ({
    numberOfRounds,
    userNumber,
    onRestart
}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over !.</TitleText>
            <Image source={require('../../assets/success.png')} />
            <BodyText>Number of rounds: {numberOfRounds}</BodyText>
            <BodyText>Number was: {userNumber}</BodyText>
            <SButton color={Colors.accent} onPress={onRestart} title="New Game"/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;