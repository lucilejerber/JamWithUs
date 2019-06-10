import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JamFormScreen from '../screens/JamFormScreen';
import LoginScreen from '../screens/LoginScreen';

const HomeStack = createStackNavigator({
  Home: LoginScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: JamFormScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Jam',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const JamStack = createStackNavigator({
  Jam: JamScreen,
});

JamStack.navigationOptions = {
  tabBarLabel: 'Jams',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
   
export default createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  LinksStack,
  SettingsStack,

}); 
