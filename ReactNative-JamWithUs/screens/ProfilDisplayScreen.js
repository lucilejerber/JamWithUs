/*
PAge pour afficher le profil utilisateur
*/
import React, {Component} from 'react'
import {screens, buttons, forms, profildisplay} from '../constants/StylesAll.js'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import {
	TOMCATUPDATE, TOMCATSHOW,
	LOCALUPDATE
} from '../constants/index';

import MenuButton from '../components/MenuButton'

class ProfilDisplay extends React.Component {
	static navigationOptions = {
		title: 'Profil',
	};
	
	constructor(props){
		super (props);

		this.state = {

			username: '',
			mail: '',
			birthday: '',
			phoneNumber:'',
			country:'',
			city:'',
			
		};
	}

	//executed before the render method
	componentWillMount(){ 
    console.log("ComponentWillMount")
	console.log(TOMCATSHOW)
	fetch(TOMCATSHOW, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
		'Content-Type': 'application/json'
      }       
    })	

    .then((response) => response.json())// converti en json 
	.then(json => {
		this.setState({ username: json.username});
		this.setState({ mail: json.mail});
		this.setState({ birthday: json.birthday});
		this.setState({ phoneNumber: json.phoneNumber});
		this.setState({ country: json.country});
		this.setState({ city: json.city});
	})
    .catch(error => console.error(error))
	}

	//executed when the user click on the "Modifier Profil" button 
	_displayDetailForProfil(){
      console.log("Modifier Profil")
      this.props.navigation.navigate("ProfilForm")
	}
	
	//executed when the user click on the "Mes Jams" button
	_displayJams(){
      console.log("Mes Jams")
      this.props.navigation.navigate("JamDescription")
	}
	
	render (){
		const { user, displayDetailForProfil } = this.props 
		return (
	           
			<View style = {styles.main_container}>
				<MenuButton navigation={this.props.navigation} />		
				<View style = {styles.image_container}>
					<Image
						style={{width: 50, height: 50}}
						source={require('../assets/images/profil_png_default.jpg')}
        			/>
      		 	</View>

				<View style={styles.middle_container}>
					<ScrollView>
	            		<Text style={profildisplay.Texttitle}>Nom d'utilisateur</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.username}</Text>
	            		
	            		<Text style={profildisplay.Texttitle}>Adresse Mail</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.mail}</Text>
	            		
	            		<Text style={profildisplay.Texttitle}>Date de Naissance</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.birthday}</Text>
	            		
	            		<Text style={profildisplay.Texttitle}>Numéro de Téléphone</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.phoneNumber}</Text>
	            		
	            		<Text style={profildisplay.Texttitle}>Pays</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.country}</Text>
	            		
	            		<Text style={profildisplay.Texttitle}>Ville</Text>
	            		<Text style={profildisplay.Textoutput}>{this.state.city}</Text>
					
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
