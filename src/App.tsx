import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Home from './screens/HomeScreen';
import Activity from './screens/ActivityScreen';
import Header from './components/Header';
import TabBarIcon from './components/TabBarIcon';
import colors from './styles/colors';
import TripBookingButton from './components/TripBookingButton';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // headerStyle: {
          //   height: 80,
          // },
          // headerTitleAlign: 'center',
          // headerTitle: () => <Header />,
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              route={route}
              focused={focused}
              color={color}
              size={size}
            />
          ),
          tabBarStyle: {
            flex: 1,
            maxHeight: 80,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Surfing" component={Activity} />
        <Tab.Screen name="Hula" component={Activity} />
        <Tab.Screen name="Vulcano" component={Activity} />
      </Tab.Navigator>
      <TripBookingButton />
    </NavigationContainer>
  );
};

export default App;
