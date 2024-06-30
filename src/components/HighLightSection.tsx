import {View, Text, FlatList, StyleSheet} from 'react-native';
import ThemedText from './ThemedText';
import commonStyles from '../styles/commonStyles';
import {SurfingImage, HulaImage, VulcanoImage} from '../constants/images';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';

const cardData = [
  {
    title: 'Surfing',
    description: 'Best Hawaiian islands for surfing',
    image: SurfingImage,
  },
  {
    title: 'Hula',
    description: 'Try it yourself',
    image: HulaImage,
  },
  {
    title: 'Vulcano',
    description: 'Volcanic conditions can change at any time.',
    image: VulcanoImage,
  },
];

const HighlightSection = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        commonStyles.sectionContainer,
        commonStyles.sectionBackground1,
        style.customStyle,
      ]}>
      <ThemedText variant="sectionHeading">Highlights</ThemedText>
      <FlatList
        contentContainerStyle={commonStyles.cardListBackground}
        horizontal={true}
        data={cardData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            cardAction={() => navigation.navigate({})}
          />
        )}
      />
    </View>
  );
};

export default HighlightSection;

const style = StyleSheet.create({
  customStyle: {
    paddingRight: 0,
  },
});
