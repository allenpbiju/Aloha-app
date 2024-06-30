import {StyleSheet, View} from 'react-native';
import ThemedText from './ThemedText';
import commonStyles from '../styles/commonStyles';
import CategoriesItemCard from './CategoriesItemCard';

const CategoriesList = [
  {
    title: 'Adventure',
  },
  {
    title: 'Culinary',
  },
  {
    title: 'Eco-tourism',
  },
  {
    title: 'Family',
  },
  {
    title: 'Sport',
  },
];

const CategoriesSection = () => {
  return (
    <View
      style={[commonStyles.sectionContainer, commonStyles.sectionBackground2]}>
      <ThemedText variant="sectionHeading" style={commonStyles.titleSpacing}>
        Categories
      </ThemedText>
      {CategoriesList.map((category, index) => (
        <CategoriesItemCard title={category.title} key={index} />
      ))}
    </View>
  );
};

export default CategoriesSection;
