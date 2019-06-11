/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

 
import Profil_Display from '../components/Profil_Display';
import ProfilForm from '../components/ProfilForm';

import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
//import Accueil from '../screens/AccueilScreen';
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
		HomeScreen: HomeScreen,
		ProfilDisplay: Profil_Display,
		ProfilForm: ProfilForm,
		// Links: LinksScreen,
		// Settings: SettingsScreen,
		JamDescription: JamDescription,
	
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)