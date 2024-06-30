import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import ThemedText from './ThemedText';
import colors from '../styles/colors';

type SpotCardProps = {
  children: string;
  image: ImageSourcePropType;
};

const SpotCard: React.FC<SpotCardProps> = ({children, image}) => {
  return (
    <View style={style.cardContainer}>
      <ThemedText variant="cardHeadingSmall" style={style.headingSpacing}>
        {children}
      </ThemedText>
      <Image source={image} />
    </View>
  );
};

export default SpotCard;

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.backgroundWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 4,
    elevation: 8,
    shadowColor: '#030002',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
  },
  headingSpacing: {
    padding: 5,
    paddingHorizontal: 12,
  },
});
