import {StyleSheet} from 'react-native';
import colors from './colors';

const typography = StyleSheet.create({
  mainHeading: {
    fontSize: 56,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.textWhite,
  },
  pageHeading: {
    fontSize: 40,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.textWhite,
  },
  cardHeading: {
    fontSize: 24,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.primary,
  },
  sectionHeading: {
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.text,
  },
  normalText: {
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Medium',
    color: colors.text,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.textWhite,
  },
  buttonTextOutline: {
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Bold',
    color: colors.primary,
  },
  iconTextActive: {
    fontSize: 12,
    fontFamily: 'IBMPlexMono-SemiBold',
    color: colors.primary,
  },
  iconTextInactive: {
    fontSize: 12,
    fontFamily: 'IBMPlexMono-SemiBold',
    color: colors.text,
  },
});

export default typography;
