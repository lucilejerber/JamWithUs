/* 
Laura
*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';


import Profil_Display from '../components/Profil_Display';
import Search from '../components/Search';

import ProfilScreen from '../screens/ProfilScreen';
import LinksScreen from '../screens/LinksScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JamScreen from '../screens/JamFormScreenScreen'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerwith: WIDTH*0.53,
}

const DrawerNavigator = createDrawerNavigator(

{
		Profil: ProfilScreen,
		Links: LinksScreen,
		SignupScreen: SignupScreen,
		SettingsScreen: SettingsScreen,
		JamScreen: JamScreen,

		Profil_Display: Profil_Display,
		Search: Search,
		
		
},
DrawerConfig,
);

export default createAppContainer(DrawerNavigator)