import {ScrollView} from 'react-native';
import Header from '../components/Header';
import GradientHeaderText from '../components/GradientHeaderText';
import mockData from '../constants/mockData';
import ActivityContentSection from '../components/ActivityContentSection';
import commonStyles from '../styles/commonStyles';
import TravelGuideSection from '../components/TravelGuideSection';

const Activity = ({route}: {route: {name: string}}) => {
  const activity = mockData.find(
    item => item.activity.toLowerCase() === route.name.toLowerCase(),
  );
  return (
    <ScrollView style={commonStyles.appBackground}>
      <Header />
      <GradientHeaderText
        text={route.name}
        fontSize={40}
        height={240}
        image={activity?.image}
      />
      <ActivityContentSection
        description={activity?.description}
        spots={activity?.topSpots}
      />
      <TravelGuideSection />
    </ScrollView>
  );
};

export default Activity;
