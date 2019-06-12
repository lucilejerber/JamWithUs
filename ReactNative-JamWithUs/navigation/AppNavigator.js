//Auteur : Gaël
	//Navigation
	
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  Platform,
  ScrollView,
  Dimensions,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import {
  createStackNavigator,
  createDrawerNavigator,
	  createSwitchNavigator,
	  createAppContainer } from 'react-navigation';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import SignoutScreen from '../screens/SignoutScreen';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PostForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import HomeScreen from '../screens/HomeScreen';
import ProfilDisplay from '../screens/ProfilDisplayScreen';

import ProfilForm from '../screens/ProfilFormScreen';
import JamForm from '../screens/JamFormScreen';

const AppStack = createDrawerNavigator({
	HomeScreen: HomeScreen,
 	JamForm: JamForm, 
 	ProfilDisplay: ProfilDisplay,
 	ProfilForm: ProfilForm, 
 	Signout: SignoutScreen},
 	 DrawerConfig,);

const AuthStack = createStackNavigator({
 	Signin: SigninScreen,
 	Signup:SignupScreen,
	ForgotPassword:ForgotPasswordScreen, 
	PostForgotPassword:PostForgotPasswordScreen 
});
	
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerwidth: WIDTH*0.43,
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
	  }
));