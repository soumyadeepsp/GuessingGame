import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';

export default function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        var chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 to 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        props.setUserNumber(enteredNumber);
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        inputMode='numeric'
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
        <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    width: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
