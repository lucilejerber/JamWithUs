/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Profil_Display from '../components/Profil_Display';
import ProfilForm from '../components/ProfilForm';

import HomeScreen from '../screens/HomeScreen';
import JamForm from '../screens/JamFormScreen';
import JamDescription from '../screens/JamDescriptionScreen';
import SignupScreen from '../screens/SignupScreen';

//import Accueil from '../screens/HomeScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerwidth: WIDTH*0.43,
}

const DrawerNavigator = createDrawerNavigator( 

{
		//Accueil: Accueil,
		ProfilForm: ProfilForm,
		
		SignupScreen: SignupScreen,
		JamForm: JamForm,
		HomeScreen: HomeScreen,
		ProfilDisplay: Profil_Display,
		// Links: LinksScreen,
		// Settings: SettingsScreen,
		JamDescription: JamDescription,
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)