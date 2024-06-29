import {StyleSheet, TouchableOpacity} from 'react-native';
import ThemedText from './ThemedText';
import colors from '../styles/colors';

type ThemedButtonProps = {
  title: string;
  onPress: () => void;
  solid?: boolean;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  onPress,
  solid = true,
}) => {
  const extraButtonStyles = solid ? styles.solidButton : styles.outlinedButton;
  const textVariant = solid ? 'buttonText' : 'buttonTextOutline';

  return (
    <TouchableOpacity
      style={[styles.buttonStyles, extraButtonStyles]}
      onPress={onPress}>
      <ThemedText variant={textVariant}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  buttonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  solidButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    elevation: 10,
    shadowColor: '#030002',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  outlinedButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
});
