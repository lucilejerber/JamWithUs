import { createStackNavigator, createAppContainer } from 'react-navigation'

import Film_Search from '../components/Film_Search'
import FilmDetail from '../components/FilmDetail'
import Search from '../components/Search'
import Profil_Display from '../components/Profil_Display'

const SearchStackNavigator = createStackNavigator({
	/*Film_Search: {
		screen: Film_Search,
		navigationOptions: {
			title: 'Rechercher'
		}
	},
	FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    	screen: FilmDetail,
    	navigationOptions: {
			title: 'FilmDetail'
		}
  	},*/	

  	Search: {
		screen: Search,
		navigationOptions: {
			title: 'Compléter le profil'
		}
	},	
  	Profil_Display: {
		screen: Profil_Display,
		navigationOptions: {
			title: 'Profil'
		}
	},





})

export default createAppContainer(SearchStackNavigator)