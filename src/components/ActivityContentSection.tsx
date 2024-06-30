import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import ThemedText from './ThemedText';
import colors from '../styles/colors';
import SpotCard from './SpotCard';

interface TopSpot {
  name: string;
  image: ImageSourcePropType;
}

type ActivityContentSectionProps = {
  description?: string;
  spots?: TopSpot[];
};

const ActivityContentSection: React.FC<ActivityContentSectionProps> = ({
  description,
  spots,
}) => {
  return (
    <View style={style.container}>
      <ThemedText variant="normalText">{description}</ThemedText>
      <ThemedText variant="sectionHeading" style={style.headingSpacing}>
        Top spots
      </ThemedText>
      {spots?.map((spot, index) => (
        <SpotCard key={index} image={spot.image}>
          {`${index + 1}. ${spot.name}`}
        </SpotCard>
      ))}
    </View>
  );
};

export default ActivityContentSection;

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  headingSpacing: {
    marginVertical: 10,
  },
});
