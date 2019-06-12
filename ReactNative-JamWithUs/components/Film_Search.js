// Components/Film_Search.js
import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ScrollView, Image} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Film_Search extends React.Component {
  
  _displayDetailForFilm = (idFilm) => {
      console.log("Display film with id " + idFilm)
      this.props.navigation.navigate("FilmDetail")
  }
  render (){
		return (
	           // Ici on rend à l'écran les éléments graphiques de notre component custom Search
			<View style={styles.main_container}>
            	<TextInput style={styles.textinput} placeholder='Titre'/>									
				{/*<Text numberOfLines={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>*/}
				<Button style={styles.button} title='Sauvegarder' onPress={()=>{}}/>


        <FlatList
				  data={films}
				  keyExtractor={(item) => item.id.toString()}
				  renderItem={({item}) => <FilmItem film={item} 
				displayDetailForFilm={this._displayDetailForFilm} />}
		/>
			</View>

		)
	}
  
}

const styles = StyleSheet.create({
  main_container: {
  	backgroundColor: '#F0F0F1',
  	flex: 1
  },

  textinput: {
  	marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },

  button: {
  	marginTop: 5,
  	color: '#000000',
    height: 50,
    textTransform: 'uppercase',
    paddingLeft: 5
  }

})

export default Film_Search
//exporte les éléments pour pouvoir les utiliser ailleurs