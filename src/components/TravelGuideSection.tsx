import {StyleSheet, View} from 'react-native';
import ThemedText from './ThemedText';
import commonStyles from '../styles/commonStyles';
import CategoriesItemCard from './CategoriesItemCard';
import TravelGuideCard from './TravelGuideCard';

const TravelGuideSection = () => {
  return (
    <View
      style={[
        commonStyles.sectionContainer,
        commonStyles.sectionBackground2,
        commonStyles.lastSection,
      ]}>
      <ThemedText variant="sectionHeading" style={commonStyles.titleSpacing}>
        Travel Guide
      </ThemedText>
      <TravelGuideCard name="Hadwin Malone" description="Guide since 2012" />
    </View>
  );
};

export default TravelGuideSection;
