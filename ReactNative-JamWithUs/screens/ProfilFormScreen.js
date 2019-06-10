/* 
Laura Screen Compléter Profil
avec les informations : birthday phoneNumber country city description genres instruments 
*/
import React from 'react'
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button, 
  FlatList, 
  Text, 
  ScrollView,
  Image, 
  Picker, 
  Modal, 
  TouchableOpacity,
} from 'react-native';

import MenuButton from '../components/MenuButton';
import {TOMCATSAVE,TOMCATUPDATE,TOMCATCREATE} from '../constants/index';
import {screens, buttons, form} from '../constants/StylesAll.js'

//import * as Constants from '../constants'

class ProfilForm extends React.Component {
	static navigationOptions = {
		title: 'Modifier profil',
	};
	
	constructor(props){
		super (props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			pickerSelection: 'Default',
			username: '',
			lastname: '',

		};
	}

  // fait des trucs sur la page en arriere plan a l'ouverture par exemple appel BDD
  componentWillMount(){ 
    const URL = TOMCATSAVE + '/user/save'
    /*fetch('https://7b926458.ngrok.io', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
    })
    .then(json => console.log(json))
    //.then(json => this.setState({
      //  name: json.name
      //}))
    .catch(error => console.error(error))*/
	}

  // A REVOIR - recup les données formulaires soumises par l'utilisateur
  handleSubmit() {
    console.log("name = " + this.state.name)
    console.log("lastname = " + this.state.lastname)
    console.log("mail = " + this.state.mail)
    console.log("TOMCATSAVE =" + TOMCATSAVE)
    console.log("URL =" + URL)

    fetch(URL + 'user/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "name": this.state.name,
        "lastname": this.state.lastname,
        "mail": this.state.mail, 
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
  }

	render (){
		return (
			<View style = {styles.main_container}>
				<View style={screens.header}>
				<MenuButton navigation={this.props.navigation} />
				<Text style={screens.title}>Modifier Profil</Text>
				</View>
				<View style={styles.middle_container}>
					<ScrollView>
						<View style={styles.middle_container}>					
							<Text style={styles.inputtitle}>Surnom</Text>
							<TextInput style={form.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Chacha'
							onChangeText={(text) => this.setState({name: text})}
							/>

							<Text style={styles.inputtitle}>Mail</Text>
							<TextInput style={form.input}  
							placeholderTextColor = "#AFAFAF" 
							placeholder='Charles.truc@truc.com'
							onChangeText={(text) => this.setState({mail: text})}
							/>

							<Text style={styles.inputtitle}>Nom</Text>
							<TextInput style={form.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Dupont'
							onChangeText={(text) => this.setState({lastname: text})}
							/>
		
							<View style = {styles.picker_area}>
								<Text style={styles.inputtitle}>Pays</Text>
									<Picker
										itemStyle = {styles.picker_item}
										style = {styles.pickerinput}
										selectedValue={this.state.pickerSelection}
										onValueChange={(itemValue, itemIndex) =>this.setState({pickerSelection: itemValue})}>
										<Picker.Item label="France" value="fr" />
										<Picker.Item label="Belgique" value="bg" />
										<Picker.Item label="Japon" value="jp" />
									</Picker>
							</View>
							<Text style={styles.inputtitle}>Genres appréciés</Text>
							<TextInput style={styles.textinput} 
							placeholderTextColor = "#AFAFAF"
							placeholder='Jazz'
							/>									
								
							<TouchableOpacity 
								style={styles.button_opacity}
								onPress={this.handleSubmit}>
								<Text 
									style = {{marginLeft: 5, marginRight: 5}}>
									Enregistrer
								</Text>   
							</TouchableOpacity>
							
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}
  
}

const styles = StyleSheet.create({
  main_container: {
  	height: '100%',
  	flex: 1
  },  
	
  middle_container: {
  	flex: 1
  },

  picker_area: {
  	//height: 100,
  	//width: 200,
  	backgroundColor: '#fafafa',
  	//flex: 1
  },
  picker_item: {
    fontSize: 15,
    height: 100,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  picker_input: {
  	height: 50,
  	width: 50,
  	alignItems: 'center',
  	backgroundColor: '#ff0000',
  	color: '#f00000'
  },

  textinput: {
  	color: '#00000f',
  	marginTop: 4,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderColor: '#FFFFFF',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 5
  },

   inputtitle: {
    color: '#0f0f0f',
    marginTop: 14,
    marginLeft: 5,
    marginRight: 5,
  },

  texttitle: {
    color: '#ffffff',
    marginTop: 14,
    marginLeft: 5,
    marginRight: 5,
  },

  image_container: {
  	backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
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

  button: {
    borderColor: '#FFFFFF',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 20
  }

})

export default ProfilForm;
//exporte les éléments pour pouvoir les utiliser ailleurs