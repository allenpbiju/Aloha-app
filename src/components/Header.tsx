import {StyleSheet, View} from 'react-native';

import A from '../../assets/vectors/a.svg';
import L from '../../assets/vectors/l.svg';
import O from '../../assets/vectors/o.svg';
import H from '../../assets/vectors/h.svg';
import SmallA from '../../assets/vectors/sa.svg';
import colors from '../styles/colors';

const Header = () => {
  return (
    <View style={headerStyles.titleContainer}>
      <A />
      <L style={headerStyles.letterGap1} />
      <O style={headerStyles.letterGap2} />
      <H style={headerStyles.letterGap1} />
      <SmallA style={headerStyles.letterGap2} />
    </View>
  );
};

export default Header;

const headerStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 20,
    backgroundColor: colors.backgroundWhite,
    height: 80,
  },
  letterGap1: {
    marginRight: -4,
  },
  letterGap2: {
    marginRight: -3,
  },
});
