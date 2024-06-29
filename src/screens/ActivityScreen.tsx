import {ScrollView} from 'react-native';
import Header from '../components/Header';
import GradientHeaderText from '../components/GradientHeaderText';

const Activity = ({route}) => {
  return (
    <ScrollView>
      <Header />
      <GradientHeaderText text={route.name} fontSize={40} height={240} />
    </ScrollView>
  );
};

export default Activity;
