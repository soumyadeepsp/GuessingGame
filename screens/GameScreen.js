import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import {useEffect, useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';

var minRange = 1;
var maxRange = 100;
function generateRandomBetween(minRange, maxRange, exclude) {
    console.log(minRange, maxRange, exclude);
    const randomNumber = Math.floor(Math.random()*(maxRange-minRange) + minRange);
    if (randomNumber===exclude) {
        return generateRandomBetween(minRange, maxRange, exclude);
    } else {
        return randomNumber;
    }
}
var firstTime = true;

export default function GameScreen(props) {
    if (firstTime===true) {
        var initialGuess = generateRandomBetween(minRange, maxRange, props.userNumber);
        var [currentGuess, setCurrentGuess] = useState(initialGuess);
    }
    useEffect(() => {
        console.log(props.userNumber+" "+currentGuess);
        if (props.userNumber==currentGuess) {
            Alert.alert("Game Over!", "Your phone guessed the number ... ", [{text: 'Hurrah!', style: 'default'}]);
            props.setIsGameOver(true);
        }
    }, [currentGuess])
    function nextGuessHandler(direction) {
        if (direction=="lower" && currentGuess<props.userNumber) {
            Alert.alert("Don't lie!", "You know it is wrong ... ", [{text: 'Sorry!', style: 'cancel'}]);
        }
        if (direction=="higher" && currentGuess>props.userNumber) {
            Alert.alert("Don't lie!", "You know it is wrong ... ", [{text: 'Soory!', style: 'cancel'}]);
        }
        if (direction=='lower') {
            maxRange = currentGuess;
            setCurrentGuess(generateRandomBetween(minRange, maxRange, currentGuess));
        } else {
            minRange = currentGuess;
            setCurrentGuess(generateRandomBetween(minRange, maxRange, currentGuess));
        }
    }
    return (
    <View style={styles.screen}>
        <Title text="Opponent's Guess"/>
        <View style={styles.numberContainer}><Text style={styles.numberText}>{currentGuess}</Text></View>
        <View>
            <Text>Higher or Lower?</Text>
            <View>
                <PrimaryButton onPress={() => nextGuessHandler("higher")}>+</PrimaryButton>
                <PrimaryButton onPress={() => nextGuessHandler("lower")}>-</PrimaryButton>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 24
    },
    numberContainer: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#ddb52f',
        fontSize: 36,
        fontWeight: 'bold'
    }
});
