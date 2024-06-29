import {View, Text, StyleSheet, ScrollView} from 'react-native';
import commonStyles from '../styles/commonStyles';

import ThemedText from '../components/ThemedText';
import Header from '../components/Header';
import GradientHeaderText from '../components/GradientHeaderText';

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <GradientHeaderText text="Welcome to Hawaii" fontSize={56} />
    </ScrollView>
  );
};

export default Home;
