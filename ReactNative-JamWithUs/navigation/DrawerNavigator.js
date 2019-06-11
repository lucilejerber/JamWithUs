/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

 
import Profil_Display from '../components/Profil_Display';
import ProfilForm from '../components/ProfilForm';

import ProfilScreen from '../screens/ProfilScreen';
import LinksScreen from '../screens/LinksScreen';
//import Accueil from '../screens/AccueilScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JamForm from '../screens/JamFormScreen';
import JamDescription from '../screens/JamDescriptionScreen';

//import Search from '../components/ProfilForm';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerwidth: WIDTH*0.43,
}

const DrawerNavigator = createDrawerNavigator(

{
		//Accueil: Accueil,
		
		JamForm: JamForm,

		ProfilDisplay: Profil_Display,
		ProfilForm: ProfilForm,
		Links: LinksScreen,
		Settings: SettingsScreen,
		JamDescription: JamDescription,
		
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)