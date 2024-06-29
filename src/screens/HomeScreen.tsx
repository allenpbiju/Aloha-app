import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';

import ThemedText from '../components/ThemedText';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={commonStyles.container}>
      <Header />
    </View>
  );
};

export default Home;
