import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import ThemedText from './ThemedText';
import ArrowIcon from './ArrowIcon';

type CardProps = {
  title: string;
  image: ImageSourcePropType;
  description: string;
  cardAction?: () => void;
};

const Card: React.FC<CardProps> = ({title, image, description, cardAction}) => {
  return (
    <View style={style.cardContainer}>
      <Image source={image} style={style.cardImage} />
      <View style={style.cardContent}>
        <View>
          <ThemedText variant="cardHeadingPrimary">{title}</ThemedText>
          <ThemedText variant="normalText">{description}</ThemedText>
        </View>
        <TouchableOpacity style={style.iconContainer} onPress={cardAction}>
          <View style={style.iconBackground}>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.backgroundWhite,
    marginRight: 12,
    marginTop: 14,
    maxWidth: 300,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#030002',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
  },
  cardImage: {
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  iconBackground: {
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
});
