//Auteur : Gaël
//Navigation

import React from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Dimensions,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
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
import Home from '../screens/HomeScreen';
import Profil_Display from '../components/Profil_Display';
import ProfilForm from '../components/ProfilForm';
import ProfilScreen from '../screens/ProfilScreen';
import JamForm from '../screens/JamFormScreen';



const AppStack = createDrawerNavigator({Home: Home, JamForm: JamForm,ProfilDisplay: Profil_Display,ProfilForm: ProfilForm, Signout: SignoutScreen}, DrawerConfig,);
const AuthStack = createStackNavigator({ Signin: SigninScreen, Signup:SignupScreen, ForgotPassword:ForgotPasswordScreen, PostForgotPassword:PostForgotPasswordScreen });

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

