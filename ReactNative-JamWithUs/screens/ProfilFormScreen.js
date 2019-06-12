/* 
Laura Screen Compléter ou Modifier Profil
avec les informations : mail username password birthday phoneNumber country city description genres instruments 
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
  Alert,
  TouchableOpacity,
} from 'react-native';

import MenuButton from '../components/MenuButton';
import {
	TOMCATUPDATE,
	LOCALUPDATE,LOCALSHOW,LOCALSAVE
} from '../constants/index';

import {screens, buttons, forms} from '../constants/StylesAll.js'

//import * as Constants from '../constants'

class ProfilForm extends React.Component {
	static navigationOptions = {
		title: 'Modifier profil',
	};
	
	constructor(props){
		super (props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
		this.state = {
			pickerSelection: 'Default',
			username: '',
			mail: '',
			password: '',
			birthday: '',
			phoneNumber:'',
			country:'',
			city:'',
			description:'',
			genres:[],
			instruments:[],

		};
	}

  // fait des trucs sur la page en arriere plan a l'ouverture par exemple appel BDD
  componentWillMount(){ 
    console.log("ComponentWillMount")//avant que le render se fasse
	
	fetch(LOCALSHOW, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
		'Content-Type': 'application/json'
      }       
    })	
	//.then((response) => console.log(response))//affiche la reposne dans la console
    .then((response) => response.json())// converti en json 
	.then(json => {
		this.setState({ username: json.username});
		this.setState({ mail: json.mail});
		this.setState({ password: json.password});
	})
    .catch(error => console.error(error))
	
	console.log(LOCALSHOW)
	}

  // A REVOIR - recup les données formulaires soumises par l'utilisateur
  handleSubmit() {
    console.log("username = " + this.state.username)
    console.log("mail = " + this.state.mail)
    console.log("password = " + this.state.password)
    
    console.log("birthday = " + this.state.birthday)
    console.log("phoneNumber = " + this.state.phoneNumber)
    console.log("country = " + this.state.country)

    console.log("city = " + this.state.city)
    console.log("description = " + this.state.description)
    console.log("genres = " + this.state.genres)

	console.log("instruments = " + this.state.instruments)
	

    fetch(LOCALUPDATE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "username": this.state.username,
        "mail": this.state.mail,
        "password": this.state.password,
        "birthday": this.state.birthday,
        "phoneNumber": this.state.phoneNumber,
        
		"country": this.state.country,
        "city": this.state.city,
        "description": this.state.description,
        "genres": this.state.genres,
        "instruments": this.state.instruments,
	
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
	
	
	if (this.state.birthday) {
		Alert.alert(
		'Le profil est complet',
		
		{text: 'OK', onPress: () => this.props.navigation.navigate("HomeScreen") },
		{cancelable: false},
		);

	//Alert.alert(this.state.username + ' votre profil à bien été complété!',);
	//this.props.navigation.navigate("HomeScreen")	
	}else{
		Alert.alert('Pour participer au Jam compléter le profil');
	}
	
	
	
  }

  
    onDateChange(data) {
    var splitDate = data.split(' ');
    var date = splitDate[0] + "T" + splitDate[1] + ":00";
    date = new Date(date);
    this.setState({date: data.toJSON()}) 

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
							<Text style={forms.inputLabel}>Nom d'utilisateur</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Chacha'
							value={this.state.username}
							onChangeText={(text) => this.setState({username: text})}
							/>

							<Text style={forms.inputLabel}>Adresse Mail</Text>
							<TextInput style={forms.input}  
							placeholderTextColor = "#AFAFAF" 
							placeholder='Charles.truc@truc.com'
							value={this.state.mail}
							onChangeText={(text) => this.setState({mail: text})}
							/>
							
							<Text style={forms.inputLabel}>Mot de Passe</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='*****'
							value={this.state.password}
							onChangeText={(text) => this.setState({password: text})}
							/>
							
							<Text style={forms.inputLabel}>Date de Naissance</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='JJ/MM/AAAA'
							onChangeText={(text) => this.setState({birthday: text})}
							/>
							
							<Text style={forms.inputLabel}>Numéro de Téléphone</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='+33---------'
							onChangeText={(text) => this.setState({phoneNumber: text})}
							/>
							

							
							<View style = {styles.picker_area}>
								<Text style={forms.inputLabel}>Pays</Text>
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
							
							<Text style={forms.inputLabel}>Ville</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Marseille'
							onChangeText={(text) => this.setState({city: text})}
							/>
							
							<Text style={forms.inputLabel}>Genres appréciés</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Jazz'
							onChangeText={(text) => this.setState({genres: text})}
							/>

							<Text style={forms.inputLabel}>Instruments pratiqués</Text>
							<TextInput style={forms.input} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Banjo'
							onChangeText={(text) => this.setState({instruments: text})}
							/>							
								
							<TouchableOpacity 
								style={buttons.opacity}
								onPress={this.handleSubmit}>
								<Text style={buttons.name}>	Enregistrer	</Text>   
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
  	backgroundColor: '#fafafa',
	//height: 100,
  	//width: 200,
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


})

export default ProfilForm;
