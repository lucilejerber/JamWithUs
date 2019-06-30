/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

 
import ProfilDisplay from '../screens/ProfilDisplayScreen';
import ProfilForm from '../screens/ProfilFormScreen';
import JamDescription from '../screens/JamDescriptionScreen';
import JamForm from '../screens/JamFormScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerwidth: WIDTH*0.43,
}

const DrawerNavigator = createDrawerNavigator(

{
		HomeScreen: HomeScreen,
		
		ProfilForm: ProfilForm,
		
		ProfilDisplay: ProfilDisplay,
		
		SignupScreen: SignupScreen,
		
		JamForm: JamForm,


		
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)