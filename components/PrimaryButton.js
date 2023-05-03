import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <>
      <View style={styles.outerContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressed, styles.container] : styles.container
          }
          onPress={onPress}
          android_ripple={{ color: '#610634' }}
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
    backgroundColor: '#72063c',
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
