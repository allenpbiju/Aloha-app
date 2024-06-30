import {StyleSheet} from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  appBackground: {
    backgroundColor: colors.backgroundWhite,
  },
  sectionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  cardListBackground: {
    paddingBottom: 18,
  },
  sectionBackground1: {
    backgroundColor: colors.backgroundWhite,
  },
  sectionBackground2: {
    backgroundColor: colors.backgroundLight,
  },
  titleSpacing: {
    marginBottom: 12,
  },
  lastSection: {
    paddingBottom: 80,
  },
});

export default commonStyles;
