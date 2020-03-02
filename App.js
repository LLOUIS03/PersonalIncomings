import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SpendScreen from './src/screen/SpendScreen';
import IncomingScreen from './src/screen/IncomingScreen';
import RelationScreen from './src/screen/RelationScreen';
import SaveIncomingScreen from './src/screen/SaveIncomingScreen';
import SaveSpendScreen from './src/screen/SaveSpendScreen';

const SpendStackNav = createStackNavigator(
  {
    Spend: SpendScreen,
    SpendInput: SaveSpendScreen,
  },
  {
    headerMode: 'none',
  },
);

const RelationStackNav = createStackNavigator(
  {
    Relation: RelationScreen,
  },
  {
    headerMode: 'none',
  },
);

const IncomingStackNav = createStackNavigator(
  {
    Incoming: IncomingScreen,
    IncomingInput: SaveIncomingScreen,
  },
  {
    headerMode: 'none',
  },
);

const BottomNavigator = createBottomTabNavigator(
  {
    Spend: SpendStackNav,
    Relation: RelationStackNav,
    Incoming: IncomingStackNav,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconname;
        switch (routeName) {
          case 'Spend':
            iconName = focused
              ? 'ios-arrow-dropdown'
              : 'ios-arrow-dropdown-circle';
            break;
          case 'Incoming':
            iconName = focused ? 'ios-arrow-dropup' : 'ios-arrow-dropup-circle';
            break;
          case 'Relation':
            iconName = 'ios-stats';
            break;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(BottomNavigator);
