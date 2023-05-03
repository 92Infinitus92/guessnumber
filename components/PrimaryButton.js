import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <>
      <View style={styles.outerContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressed, styles.container] : styles.container
          }
          onPress={onPress}
          android_ripple={{ color: Colors.primary600 }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  preseed: {
    opacity: 0.75,
  },
});
