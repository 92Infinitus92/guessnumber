import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  let screen = <StartGameScreen onNumberPicked={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <LinearGradient colors={['#52072c', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={{ opacity: 0.4 }}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
