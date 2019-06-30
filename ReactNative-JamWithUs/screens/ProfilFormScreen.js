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
	TOMCATUPDATE, TOMCATSHOW,
	LOCALUPDATE,LOCALSHOW,LOCALSAVE
} from '../constants/index';

import {screens, buttons, forms} from '../constants/StylesAll.js'
import DatePicker from 'react-native-datepicker';
import MultiSelect from 'react-native-multiple-select';
//import * as Constants from '../constants'

class ProfilForm extends React.Component {
	static navigationOptions = {
		title: 'Modifier profil',
	};
	
	constructor(props){
		super (props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onDateChange = this.onDateChange.bind(this)
	    this.onSelectedInstrumentsChange = this.onSelectedInstrumentsChange.bind(this)
	    this.onSelectedGenresChange = this.onSelectedGenresChange.bind(this)

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
		    selectedGenres: [],
		    selectedInstruments: [],
		};
	}

  // fait des trucs sur la page en arriere plan a l'ouverture par exemple appel BDD
  componentWillMount(){ 
    console.log("ComponentWillMount")//avant que le render se fasse
	console.log(TOMCATSHOW)
	fetch(TOMCATSHOW, {
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
    this.getGenres();
    this.getInstruments();
}

  // Request to the data base to get instruments
  getInstruments() {  
    fetch('http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/Instrument', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      }, 
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log("instruments")
      console.log(responseJson)
        this.setState({
          instruments: responseJson
        }) 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // Request to the data base to get genre 
  getGenres() {
    fetch('http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/Genre', {
      method: 'POST',   
      headers: {
        Accept: 'application/json', 
      },  
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        console.log("igenre")
        this.setState({
          genres: responseJson
        })
    })
    .catch((error) => {
      console.error(error);
    });
  }  
 
  onSelectedInstrumentsChange(selectedInstruments) {
    this.setState({ selectedInstruments: selectedInstruments });
    console.log(selectedInstruments )
  };

  onSelectedGenresChange(selectedGenres) {
    this.setState({ selectedGenres: selectedGenres });
    console.log(selectedGenres )
  };  


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
	
	var url = TOMCATUPDATE + "/1";
	console.log(url)

    fetch(url, {
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
<<<<<<< HEAD
		'Le profil est complet',
		'',
=======
        'Le profil est complet',
        '',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
>>>>>>> 54a057a733948ea4565bdabaa54072753d142423
		{text: 'OK', onPress: () => this.props.navigation.navigate("HomeScreen") },

        ],
        {cancelable: false},
      );

	//Alert.alert(this.state.username + ' votre profil à bien été complété!',);
	//this.props.navigation.navigate("HomeScreen")	
	}else{
		Alert.alert('Pour participer au Jam compléter le profil entièrement');
	}	
  }

    onDateChange(data) {
	    date = new Date(data);
	    console.log(date)
	    this.setState({birthday: date}) 
	}

	render (){
    const { selectedInstruments } = this.state;
    const { selectedGenres } = this.state;
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
							value="*********"
							onChangeText={(text) => this.setState({password: text})}
							secureTextEntry={true}
							/>
							
							<Text style={forms.inputLabel}>Date de Naissance</Text>
				              <View style={forms.input}>
				                <DatePicker
				                  date={this.state.birthday}
				                  onDateChange={this.onDateChange}
				                  mode="date"
				                  customStyles={{
				                    dateIcon: {
				                      position: 'absolute',
				                      left: 0,
				                      top: 4,
				                      marginLeft: 0
				                    },
				                    dateInput: {
				                      marginLeft: 36,
				                      borderWidth: 0,
				                      width: 300
				                  }}} 
				                /> 
				              </View>
							
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
							
					
							<Text style={forms.inputLabel}>Instruments pratiqués</Text>
				              <MultiSelect
				                items={this.state.instruments}
				                uniqueKey="id"
				                displayKey="name"
				                onSelectedItemsChange={this.onSelectedInstrumentsChange}
				                styleMainWrapper={forms.multiSelect}
				                styleDropdownMenuSubsection={styles.round}
				                selectedItems={selectedInstruments}
				              />
				                 
				              <Text style={forms.inputLabel}>Genres appréciés</Text>
				              <MultiSelect
				                styleMainWrapper={forms.multiSelect}
				                items={this.state.genres}
				                uniqueKey="id"
				                displayKey="name"
				                onSelectedItemsChange={this.onSelectedGenresChange}
				                styleDropdownMenuSubsection={styles.round}
				                selectedItems={selectedGenres}                
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

  round: {
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: '#f3f3f3', 
    paddingRight: 20, 
  },


})

export default ProfilForm;
