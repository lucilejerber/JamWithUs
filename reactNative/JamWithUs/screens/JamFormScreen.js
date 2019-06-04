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

import DateTimePicker from "react-native-modal-datetime-picker";
import MultiSelect from 'react-native-multiple-select';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 10, 
    paddingTop: 50, 
    height: 105,
  },
  contentContainer: {
  },
  textInput: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    marginTop: 5,
    backgroundColor: '#f3f3f3', 
    borderRadius: 20
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
  inputContainer: {
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
}); 

export default class JamForm extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)

    this.showDateTimePicker = this.showDateTimePicker.bind(this)
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this)
    this.handleDatePicked = this.handleDatePicked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSelectedInstrumentsChange = this.onSelectedInstrumentsChange.bind(this)
    this.onSelectedGenresChange = this.onSelectedGenresChange.bind(this)

    this.state = {
      name: '',
      date: new Date(),
      lieu: '',
      administrateur: '',
      nbMaxParticipants: '',
      description: '',

      isDateTimePickerVisible: false,
      day: new Date().getDate().toLocaleString(), //Current Date
      month: (new Date().getMonth() + 1).toLocaleString(), //Current Month
      year: new Date().getFullYear().toLocaleString(), //Current Year,
      instruments: [],
      genres: [],
      selectedItems: [],
      selectedGenres: [],
      selectedInstruments: [],
    } 
  }

  showDateTimePicker() { 
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });    
  }; 
   
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
    // this.getGenres();
    // this.getInstruments();
  }
 
  // TO-DO : Rajouter bouton "ajouter lieu"
  handleSubmit() {
    var date;
    console.log("date = " + this.state.date)
    console.log("name = " + this.state.name)
    console.log("complet = " + null)
    console.log("nombreMaxParticipants = " + 0)
    console.log("nombreDeParticipants = " + 0)
    console.log("description = " + this.state.description)
    console.log("administrateur = " + "admin")
    console.log("lieu = " +  this.state.lieu)
    console.log("instruments = " +  this.state.selectedInstruments)
    console.log(this.state.selectedInstruments)
    console.log("genres = " +  this.state.selectedGenres)
    console.log(this.state.genres)

    // fetch('https://1caf9c08.ngrok.io/Jam/save', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     ContentType: 'application/json'
    //   }, 
    //   body: JSON.stringify({
    //     "nom": this.state.name,
    //     "date": this.state.date,
    //     "lieu": this.state.lieu, 
    //     "administrateur": "admin", 
    //     "nombreMaxParticipants": this.state.nbMaxParticipants,
    //     "complet": false, 
    //     "nombreDeParticipants": 1,
    //     "description": this.state.description,
    //   }),
    // })
    // .then(json => console.log(json))
    // .catch(error => console.error(error))
  }   

  // Request to the data base to get instruments
  getInstruments() {  
    fetch('https://57eb4b9a.ngrok.io/Instrument', {
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
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  // Request to the data base to get genre
  getGenres() {
    fetch('https://57eb4b9a.ngrok.io/Genre', {
      method: 'POST',
      headers: {
        Accept: 'application/json', 
      },  
    })
    .then((response) => response.json())
    .then((responseJson) => {
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
  
  render() { 
    const { selectedInstruments } = this.state;
    const { selectedGenres } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <View style={styles.jamContainer}>
            <Text style={styles.title}>CREATION JAM</Text>  
            <FormLocation />

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nom de la jam</Text>
              <TextInput 
                style={styles.textInput}   
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({name: text})}
              />  

              <Text style={styles.inputLabel}>Date</Text> 
              <View style={{flex: 2, flexDirection: 'row', marginLeft: 40, marginRight: 40}}>
                <View style={{flex: 1}}>
                  <Text>{this.state.day} / {this.state.month} / {this.state.year}</Text> 
                </View>
                <View style={{flex: 2, paddingRight: 10}}>
                  <Button 
                    style={styles.dateContainer}
                    title="Show DatePicker" 
                    onPress={this.showDateTimePicker} 
                    color="gray" 
                  />
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                  />  
                </View>
              </View>

              <Text style={styles.inputLabel}>Lieu</Text>
              <MultiSelect
                items={this.state.instruments}
                uniqueKey="id"
                displayKey="nom"
                onSelectedItemsChange={this.onSelectedInstrumentsChange}
                styleMainWrapper={styles.multiSelect}
                styleDropdownMenuSubsection={styles.round}
                selectedItems={selectedInstruments}
              /> 
              

              <Text style={styles.inputLabel}>Instruments</Text>
              <MultiSelect
                items={this.state.instruments}
                uniqueKey="id"
                displayKey="nom"
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
                displayKey="nom"
                onSelectedItemsChange={this.onSelectedGenresChange}
                styleDropdownMenuSubsection={styles.round}
                selectedItems={selectedGenres}                
              />              
           
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput 
                styleInputGroup={styles.multiSelect}
                style={styles.textInput} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({description: text})}
              />

              <Text style={styles.inputLabel}>NombreMaxParticipants</Text>
              <TextInput 
                style={styles.textInput} 
                editable = {true} 
                maxLength = {40} 
                onChangeText={(text) => this.setState({nbMaxParticipants: text})}
              />
              
              <Button color='#EC5314' title="Créer Jam" onPress={this.handleSubmit} />
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
} 