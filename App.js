import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import {useState, usestate} from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  function pickedNumberHandler(pickerNumber) {
    setUserNumber(pickerNumber);
  }
  var screen = <StartGameScreen setUserNumber={setUserNumber}/>
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} setIsGameOver={setIsGameOver}/>
  }
  if (isGameOver) {
    screen = <GameOver />
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <SafeAreaView>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
