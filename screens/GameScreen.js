import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userChoice }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState();
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text></Text>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
  },
});
