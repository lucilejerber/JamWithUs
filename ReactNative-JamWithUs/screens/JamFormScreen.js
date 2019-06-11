import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
  DatePickerIOS,
  Button,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText'; 
import FormLocation from '../components/Common/FormLocation'; 
import {screens, buttons,forms} from '../constants/StylesAll.js'

import DatePicker from 'react-native-datepicker';
import MultiSelect from 'react-native-multiple-select';

import MenuButton from '../components/MenuButton'

import {
	TOMCATUPDATE,LOCALUPDATE,LOCALSHOW,LOCALSAVE
} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },

  header: {
    marginBottom: 10, 
    paddingBottom: 10, 
    backgroundColor:'#EC5314',
    paddingTop: 40, 
  },
  title: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginLeft: 60, 
    color: 'white',

  },
  contentContainer: {
  },
  input: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20, 
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#f3f3f3', 
    borderRadius: 20,
  },
  round: {
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: '#f3f3f3', 
    paddingRight: 20, 
  },
  inputLabel: {
    marginLeft: 40,
    fontWeight: 'bold',
  },
  inputsContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  multiSelect: {
    padding: 5,   
    marginLeft: 40,
    marginRight: 40,
  },  
  dateContainer: {
    width: 50
  },
  mapStyle: {
    height: 50,
    width: 50
  }
}) 

export default class JamForm extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSelectedInstrumentsChange = this.onSelectedInstrumentsChange.bind(this)
    this.onSelectedGenresChange = this.onSelectedGenresChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onLocationChange = this.onLocationChange.bind(this)

    
    this.state = { 
      name: '',
      date: new Date(),

      locationName: '',
      locationAdress: '',
      latitude: '',
      longitude: '',

      admin: '',
      description: '',
      maxParticipants: '',

      instruments: [],
      genres: [],
      selectedGenres: [],
      selectedInstruments: [],

      day: new Date().getDate().toLocaleString(), //Current Date
      month: (new Date().getMonth() + 1).toLocaleString(), //Current Month
      year: new Date().getFullYear().toLocaleString(), //Current Year,
    } 
  }

  componentWillMount() {
    this.getGenres();
    this.getInstruments();
  }

  
  handleSubmit() {
    // var date;
    console.log("Name = " + this.state.name)
    console.log("Date = " + this.state.date)
    console.log("Location Name = " + this.state.locationName)
    console.log("Location Adress = " + this.state.locationAdress)
    console.log("Latitude = " + this.state.latitude)
    console.log("Longitude = " + this.state.longitude)
    console.log("Administrateur = " + "admin")
    console.log("Instruments = ")

    console.log(this.state.selectedInstruments)
    console.log("Genres = ")

    console.log(this.state.selectedGenres)
    console.log("Description = " + this.state.description)
    console.log("MaxParticipants = " + this.state.maxParticipants)
  
    fetch('http://729119a4.ngrok.io/Jam/save', {

      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'

      },  

      body: JSON.stringify({
        "name": this.state.name,
        "date": this.state.date,
        "admin": this.state.admin,

        "locationName": this.state.locationName, 
        "locationAdress": this.state.locationAdress, 
        "latitude": this.state.latitude, 
        "longitude": this.state.longitude, 

        "description": this.state.description, 
        "maxParticipants": this.state.maxParticipants,
        "instruments": this.state.selectedInstruments,
        "genres": this.state.selectedGenres,
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
	 
	//Pop-up alert here plus condition que le name soit pas vide
	if (this.state.name) {
		Alert.alert('La Jam ' + this.state.name + ' à bien été créée!');
	}else{
		Alert.alert('Le nom de la Jam ne peut pas être nul!');
	}

}   

  // Request to the data base to get instruments
  getInstruments() {  

    fetch('http://729119a4.ngrok.io/Instrument', {

      method: 'POST',
      headers: {
        Accept: 'application/json',
      }, 
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson)
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

    fetch('http://729119a4.ngrok.io/Genre', {

      method: 'POST',   
      headers: {
        Accept: 'application/json', 
      },  
    })
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log(responseJson)
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


  onDateChange(data) {
    var splitDate = data.split(' ');
    var date = splitDate[0] + "T" + splitDate[1] + ":00";
    date = new Date(date);

    this.setState({date: date.toJSON()}) 

  }
  
  onLocationChange(data) {
    console.log("-- Location --")
    // console.log(data)
    this.setState({ locationName: data.name });
    this.setState({ locationAdress: data.formatted_address });
    this.setState({ latitude: data.geometry.location.lat });
    this.setState({ longitude: data.geometry.location.lng });

    console.log("Name: " + data.name)
    console.log("Adress: " + data.formatted_address)
    console.log("Latitude: " + data.geometry.location.lat)
    console.log("Longitude: " + data.geometry.location.lng)
  }

  render() { 
    const { selectedInstruments } = this.state;
    const { selectedGenres } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.jamContainer}>

            <View style={styles.header}>
              <MenuButton navigation={this.props.navigation} />
              <Text style={styles.title}>Création Jam</Text>  
            </View>


            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nom de la jam</Text>
              <TextInput 
                style={styles.input}   
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({name: text})}
              />        
 
              <Text style={styles.inputLabel}>Date</Text> 
              <View style={styles.input}>
                <DatePicker
                  date={this.state.date}

                  onDateChange={this.onDateChange}

                  mode="datetime"
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


              <Text style={styles.inputLabel}>Lieu</Text>

              <FormLocation handler={this.onLocationChange} styles={styles.input} />


              <Text style={styles.inputLabel}>Instruments</Text>
              <MultiSelect
                items={this.state.instruments}
                uniqueKey="id"
                displayKey="name"
                onSelectedItemsChange={this.onSelectedInstrumentsChange}
                styleMainWrapper={styles.multiSelect}
                styleDropdownMenuSubsection={styles.round}
                selectedItems={selectedInstruments}
              />
                 
              <Text style={styles.inputLabel}>Genres</Text>
              <MultiSelect
                styleMainWrapper={styles.multiSelect}
                items={this.state.genres}
                uniqueKey="id"
                displayKey="name"
                onSelectedItemsChange={this.onSelectedGenresChange}
                styleDropdownMenuSubsection={styles.round}
                selectedItems={selectedGenres}                
              />              
           
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput 
                styleInputGroup={styles.multiSelect}
                style={styles.input} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({description: text})}
              />

              <Text style={styles.inputLabel}>NombreMaxParticipants</Text>
              <TextInput 
                style={styles.input} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({maxParticipants: text})}
              />
			// Bouton button remplacement par TouchableOpacity here + le style pour les boutons "Enregistrer"
			<TouchableOpacity 
				onPress={this.handleSubmit}
				style={buttons.opacity}>
				<Text style={buttons.name}>Enregistrer</Text>
			</TouchableOpacity>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
} 