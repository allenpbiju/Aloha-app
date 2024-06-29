import {StyleSheet, Text, View} from 'react-native';
import ThemedButton from './ThemedButton';

const TripBookingButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <ThemedButton title="Book a trip" onPress={() => {}} solid={true} />
    </View>
  );
};

export default TripBookingButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    padding: 8,
  },
});
