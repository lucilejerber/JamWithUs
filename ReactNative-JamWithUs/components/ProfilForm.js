/* 
Laura Formulaire Profil
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
//import * as Lonstants from '../constants'

class ProfilForm extends React.Component {

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
	           // Ici on rend à l'écran les éléments graphiques de notre component custom Search
			<View style = {styles.main_container}>
				
        <MenuButton navigation={this.props.navigation} />
				<View style={styles.middle_container}>
					<View style = {styles.image_container}>
						<Image
							style={{width: 50, height: 50}}
							source={require('../assets/images/profil_png_default.jpg')}
	        			/>
      		 		</View>
  

      		 	<ScrollView>
				<View style={styles.middle_container}>
	            		<Image/>
	            		
	            		<Text style={styles.inputtitle}>Surnom</Text>
						<TextInput style={styles.textinput} 
              placeholderTextColor = "#AFAFAF" 
	        		placeholder='Chacha'
              onChangeText={(text) => this.setState({name: text})}
	        	/>

	        			<Text style={styles.inputtitle}>Mail</Text>
						<TextInput style={styles.textinput} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Charles.truc@truc.com'
              onChangeText={(text) => this.setState({mail: text})}
						/>

						<Text style={styles.inputtitle}>Nom</Text>
						<TextInput style={styles.textinput} 
							placeholderTextColor = "#AFAFAF" 
							placeholder='Dupont'
              onChangeText={(text) => this.setState({lastname: text})}
						/>
				{/*		<TextInput style={styles.textinput} placeholder='JJ/MM/AAAA'/>
						<TextInput style={styles.textinput} placeholder='charles.dupont@exemple.com'/>
						<TextInput style={styles.textinput} placeholder=''/>
						<TextInput style={styles.textinput} placeholder='<br /> <br> </br>Je suis un passionné de Jazz /\nmais\n'/><TextInput style={styles.textinput} placeholder='06XXXXXXXX'/>
						<TextInput style={styles.textinput} placeholder='FRANCE'/>
						<TextInput style={styles.textinput} placeholder='Paris'/> 
						<TextInput style={styles.textinput} placeholder='Saxophone'/>
				*/}	    
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
						{/*<Button Style={styles.button} title='Sauvegarder' onPress={()=>{}}/>*/}

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
  	backgroundColor: '#d1d3d5',
  	marginTop: 20,
  	flex: 1
  },  

  top_container: {
  	backgroundColor: '#383939',
  	marginTop: 10,
  	flex: 1
  },

  middle_container: {
  	backgroundColor: '#fafafa',
  	flex: 10
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