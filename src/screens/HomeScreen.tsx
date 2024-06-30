import {ScrollView} from 'react-native';
import Header from '../components/Header';
import GradientHeaderText from '../components/GradientHeaderText';
import HighlightSection from '../components/HighLightSection';
import CategoriesSection from '../components/CategoriesSection';
import TravelGuideSection from '../components/TravelGuideSection';

import {MainHeaderImage} from '../constants/images';
import commonStyles from '../styles/commonStyles';

const Home = () => {
  return (
    <ScrollView style={commonStyles.appBackground}>
      <Header />
      <GradientHeaderText
        text="Welcome to Hawaii"
        fontSize={56}
        image={MainHeaderImage}
      />
      <HighlightSection />
      <CategoriesSection />
      <TravelGuideSection />
    </ScrollView>
  );
};

export default Home;
