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
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText'; 
import FormLocation from '../components/FormLocation'; 

import DatePicker from 'react-native-datepicker';
import MultiSelect from 'react-native-multiple-select';

import MenuButton from '../components/MenuButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    //marginBottom: 10,
    paddingBottom: 10, 
    paddingTop: 40, 
    //marginLeft: 60, 
    height: 105,
    backgroundColor: '#ec5314', 
    color: '#f2d8a5'
  },
  contentContainer: {
  },
  input: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20, 
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
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
  },
  button: {
    color: '#ffffff',
    borderRadius: 20,
    borderColor: '#fa9605',
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
   // borderColor: '#fff'//borderWidth: '#fa9605',
  },
}); 

export default class JamForm extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSelectedInstrumentsChange = this.onSelectedInstrumentsChange.bind(this)
    this.onSelectedGenresChange = this.onSelectedGenresChange.bind(this)
    
    this.state = { 
      name: '',
      date: new Date(),
      location: '',
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

  handleDatePicked(date) {
    console.log("A date has been picked: ", date.getDate());
    console.log("A date has been picked: ", date.getMonth());
    console.log("A date has been picked: ", date.getFullYear());
    this.setState({ day: date.getDate().toLocaleString() }); 
    this.setState({ month: (date.getMonth() + 1).toLocaleString() }); 
    this.setState({ year: date.getFullYear().toLocaleString() }); 
    this.setState({ date: date.toJSON()}); 
    this.hideDateTimePicker(); 
  };

  componentWillMount() {
    this.getGenres();
    this.getInstruments();
  }
 
  
  handleSubmit() {
    var date;
    console.log("name = " + this.state.name)
    console.log("date = " + this.state.date)
    console.log("maxParticipants = " + this.state.maxParticipants)
    console.log("description = " + this.state.description)
    console.log("administrateur = " + "admin")
    console.log("lieu = " +  this.state.lieu)
    console.log("instruments = " +  this.state.selectedInstruments)
    console.log(this.state.selectedInstruments)
    console.log("genres = " +  this.state.selectedGenres)
    console.log(this.state.genres)
  
    fetch('http://7b4c103f.ngrok.io/Jam/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "name": this.state.name,
        "date": this.state.date,
        "admin": this.state.admin,
        "location": this.state.location, 
        "description": this.state.description, 
        "maxParticipants": this.state.maxParticipants,
        "instruments": this.state.instruments,
        "genres": this.state.genres,
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
  }   

  // Request to the data base to get instruments
  getInstruments() {  
    fetch('http://7b4c103f.ngrok.io/Instrument', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      }, 
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
        this.setState({
          instruments: responseJson
        })
        console.log(this.state.instruments)  
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // Request to the data base to get genre
  getGenres() {
    fetch('http://7b4c103f.ngrok.io/Genre', {
      method: 'POST',   
      headers: {
        Accept: 'application/json', 
      },  
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          genres: responseJson
        })
        console.log(this.state.genres)
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

  onSelectedLocationChange(event) {
    this.setState({message: event.target.value})
  }
  
  render() { 
    const { selectedInstruments } = this.state;
    const { selectedGenres } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <View style={styles.jamContainer}>
            
            <Text style={styles.title}>Creation Jam</Text>  
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
                  onDateChange={date => this.setState({ date })}
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
              <View style={styles.input}>
                <FormLocation handler={this.onSelectedLocationChange} style={styles.input} />
              </View>

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
              
              <Button style={styles.button}  title="Enregistrer" onPress={this.handleSubmit} />
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
} 