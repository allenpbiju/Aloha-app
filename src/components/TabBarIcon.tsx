import {View, Text, StyleSheet} from 'react-native';

import HomeIcon from '../../assets/vectors/home.svg';
import SurfingIcon from '../../assets/vectors/surfing.svg';
import HulaIcon from '../../assets/vectors/hula.svg';
import VulcanoIcon from '../../assets/vectors/vulcano.svg';
import React from 'react';
import ThemedText from './ThemedText';
import colors from '../styles/colors';

type TabBarIconProps = {
  route: {
    name: string;
  };
  focused: boolean;
  color: string;
  size: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({
  route,
  focused,
  color,
  size,
}) => {
  let IconComponent;
  let label;

  switch (route.name) {
    case 'Home':
      IconComponent = HomeIcon;
      label = 'Home';
      break;
    case 'Surfing':
      IconComponent = SurfingIcon;
      label = 'Surfing';
      break;
    case 'Hula':
      IconComponent = HulaIcon;
      label = 'Hula';
      break;
    case 'Vulcano':
      IconComponent = VulcanoIcon;
      label = 'Vulcano';
      break;
    default:
      return null;
  }

  return (
    <View
      style={[
        styles.tabBarIconContainer,
        focused && styles.tabBarActiveContainer,
      ]}>
      <IconComponent width={size} height={size} style={{color: color}} />
      <ThemedText variant="iconTextActive" style={{color: color}}>
        {label}
      </ThemedText>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 100,
  },
  tabBarActiveContainer: {
    borderBottomWidth: 5,
    borderColor: colors.primary,
  },
});
