import {StyleSheet, View, Image} from 'react-native';
import {GuideProfileImage} from '../constants/images';

import ThemedText from './ThemedText';
import colors from '../styles/colors';
import ThemedButton from './ThemedButton';

const TravelGuideCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <View style={style.cardContainer}>
      <View>
        <ThemedText variant="cardHeading">{name}</ThemedText>
        <ThemedText variant="normalText" style={style.customSpacing}>
          {description}
        </ThemedText>
        <View style={style.cardButtonContainer}>
          <ThemedButton title="Contact" solid={false} onPress={() => {}} />
        </View>
      </View>
      <View style={style.cardImageContainer}>
        <Image source={GuideProfileImage} />
      </View>
    </View>
  );
};

export default TravelGuideCard;

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.backgroundWhite,
    padding: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  cardContent: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  customSpacing: {
    marginBottom: 20,
  },
  cardImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  guidePrfileImageStyle: {},
});
