import { createStackNavigator, createAppContainer } from 'react-navigation'


import ProfilForm from '../screens/ProfilFormSceeen'
import ProfilDisplay from '../screens/ProfilDisplayScreen'
import JamDescription from '../screens/JamDescription'

const ProfilStackNavigator = createStackNavigator({

  	ProfilForm: {
		screen: ProfilForm,
		navigationOptions: {
			title: 'Modifier Profil'
		}
	},	
  	ProfilDisplay: {
		screen: ProfilDisplay,
		navigationOptions: {
			title: 'Mon Profil'
		}
	},
	
  	JamDescription: {
		screen: JamDescription,
		navigationOptions: {
			title: 'Mes Jams'
		}
	},




})

export default createAppContainer(ProfilStackNavigator)