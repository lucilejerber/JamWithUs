/*
  This page displays the form to create a jam
*/

import React from 'react';
import {
  Alert,
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
} from 'react-native';
import { WebBrowser } from 'expo';

import FormLocation from '../components/Common/FormLocation'; 
import MenuButton from '../components/MenuButton'

import DatePicker from 'react-native-datepicker';
import MultiSelect from 'react-native-multiple-select';



import {screens, buttons, forms} from '../constants/StylesAll.js'
import {TOMCAT, JAM, SAVE, USERID, USER, INSTRUMENT, GENRE} from '../constants/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginLeft: 60, 
    color: 'white',
  },
  contentContainer: {
  },
  round: {
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: '#f3f3f3', 
    paddingRight: 20, 
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
  },
}); 

export default class JamForm extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Créer une Jam',
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
    } 
  }

  componentWillMount() {
    this.getGenres();
    this.getInstruments();
  }

  handleSubmit() {
    var url = TOMCAT + JAM + SAVE;
    fetch(url, {
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
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.errors) {
        Alert.alert('Veuillez vérifier que vous avez rempli tous les champs.');
      } else{
        Alert.alert('La Jam ' + this.state.name + ' à bien été créée!');
      }
    })
    .catch(error => console.error(error))
  }   

  // Request to the data base to get instruments
  getInstruments() {  
    var url = TOMCAT + INSTRUMENT;
    fetch(url, {
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
    var url = TOMCAT + GENRE;
    fetch(url, {
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

            <View style={screens.header}>
              <MenuButton navigation={this.props.navigation} />
              <Text style={styles.title}>Création Jam</Text>  
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nom de la jam</Text>
              <TextInput 
                style={forms.input}   
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({name: text})}
              />        
 
              <Text style={forms.inputLabel}>Date</Text> 
              <View style={forms.input}>
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

              <Text style={forms.inputLabel}>Lieu</Text>
              <FormLocation handler={this.onLocationChange} styles={forms.input} />

              <Text style={forms.inputLabel}>Instruments</Text>
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
                 
              <Text style={forms.inputLabel}>Genres</Text>
              <MultiSelect
                styleMainWrapper={styles.multiSelect}
                items={this.state.genres}
                uniqueKey="id"
                displayKey="name"
                onSelectedItemsChange={this.onSelectedGenresChange}
                styleDropdownMenuSubsection={styles.round}
                selectedItems={selectedGenres}                
              />              
           
              <Text style={forms.inputLabel}>Description</Text>
              <TextInput 
                styleInputGroup={styles.multiSelect}
                style={forms.input} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({description: text})}
              />

              <Text style={forms.inputLabel}>NombreMaxParticipants</Text>
              <TextInput 
                style={forms.input} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({maxParticipants: text})}
              />
			
      			<TouchableOpacity 
        				onPress={this.handleSubmit}
        				style={buttons.opacity}>
        				<Text style={buttons.name}>Enregistrer</Text>
        		</TouchableOpacity>
              
              <Button color='#EC5314' title="Créer Jam" onPress={this.handleSubmit} />
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
} 