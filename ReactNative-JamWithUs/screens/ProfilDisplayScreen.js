/* 
Laura 
*/
import React, {Component} from 'react'
import users from '../Helpers/usersData'
import UserItem from '../components/UserItem'
import {screens, buttons} from '../constants/StylesAll.js'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ScrollView, Image, TouchableOpacity} from 'react-native'


import MenuButton from '../components/MenuButton'

class ProfilDisplay extends React.Component {
	static navigationOptions = {
		title: 'Profil',
	};
	
	_displayDetailForProfil(){
      console.log("Modifier Profil")
      this.props.navigation.navigate("ProfilForm")
	}
	
	_displayJams(){
      console.log("Mes Jams")
      //this.props.navigation.navigate("JamDescription")
	}
	
	render (){
		console.log(this.props)
		const { user, displayDetailForProfil } = this.props
		return (
	           // Ici on rend à l'écran les éléments graphiques de notre component custom Search
			<View style = {styles.main_container}>
				<MenuButton navigation={this.props.navigation} />
        {/*<View style={styles.top_container}>
					<Text style={styles.header_text}>Mon Profil</Text>

				</View>*/}
				
				<View style = {styles.image_container}>
					<Image
						style={{width: 50, height: 50}}
						source={require('../assets/images/profil_png_default.jpg')}
        			/>
      		 	</View>

				<View style={styles.middle_container}>
					<ScrollView>
	            		<Image/>
						<FlatList
				  		data={users}
				  		keyExtractor={(item) => item.id.toString()}
				  		renderItem={({item}) => <UserItem user={item}
				  		displayDetailForProfil={this._displayDetailForProfil} 
				  		/>}
						/>						
					</ScrollView>
					<TouchableOpacity 
						onPress={()=> this._displayDetailForProfil()}
              			style={buttons.opacity}>
						<Text style={buttons.name}>Modifier Profil</Text>
					</TouchableOpacity>
					
					<TouchableOpacity 
						onPress={()=> this._displayJams()}
              			style={buttons.opacity}>
						<Text style={buttons.name}>Mes Jams</Text>
					</TouchableOpacity>
				</View>
			</View>

		)
	}
 
}

const styles = StyleSheet.create({
  main_container: {
  	backgroundColor: '#fff',
  	marginTop: 20,
  	flex: 1
  },  

  top_container: {
  	backgroundColor: '#fff',
  	marginTop: 10,
  	flex: 1
  },

  middle_container: {
  	backgroundColor: '#fff',
  	flex: 10
  },

  textdataname: {
	color: '#000066',
    marginTop: 14,
    marginLeft: 5,
    marginRight: 5,
  },
  image_container: {
  	backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
    button_opacity: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  header_text: {
	color: '#ffffff',
    marginTop: 14,
    marginLeft: 5,
    marginRight: 5,
  }

})

export default ProfilDisplay;