/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

 
import ProfilDisplay from '../screens/ProfilDisplayScreen';
import ProfilForm from '../screens/ProfilFormScreen';
import JamDescription from '../screens/JamDescriptionScreen';

//import ProfilScreen from '../screens/ProfilScreen';
//import Accueil from '../screens/AccueilScreen';
//import LinksScreen from '../screens/LinksScreen';
//import Search from '../components/ProfilForm';

import SignupScreen from '../screens/SignupScreen';

//import SettingsScreen from '../screens/SettingsScreen';

import JamForm from '../screens/JamFormScreen';



const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerwidth: WIDTH*0.43,
}

const DrawerNavigator = createDrawerNavigator(

{
		//Accueil: Accueil,
		ProfilForm: ProfilForm,
		
		ProfilDisplay: ProfilDisplay,
		SignupScreen: SignupScreen,
		JamForm: JamForm,

		
		
		//Links: LinksScreen,
		//Settings: SettingsScreen,
		
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)