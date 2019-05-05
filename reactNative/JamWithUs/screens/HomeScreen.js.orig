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

import DateTimePicker from "react-native-modal-datetime-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  title: {
<<<<<<< HEAD
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#4F2214',
    marginBottom: 10,
    // marginTop: 40,
    paddingBottom: 20, 
    paddingTop: 50, 
    paddingLeft: 30,
    paddingRight: 30,
  },
  contentContainer: {
  },
  textInput: {
    height: 40,
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    backgroundColor: '#dfdfdf',
  },
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginLeft: 30,
    marginRight: 30,
  },
});
 
=======
    color: '#4F2214',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentContainer: {
    paddingTop: 30,
    margin: 10
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});

>>>>>>> c0dd537e65aa200dd90f60ff29dcb3b702ff10a0
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)

    this.showDateTimePicker = this.showDateTimePicker.bind(this)
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this)
    this.handleDatePicked = this.handleDatePicked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
<<<<<<< HEAD
    this.getInstruments = this.getInstruments.bind(this)
    this.getGenres = this.getGenres.bind(this)
=======
>>>>>>> c0dd537e65aa200dd90f60ff29dcb3b702ff10a0

    this.state = {
      name: '',
      isDateTimePickerVisible: false,
      day: new Date().getDate().toLocaleString(), //Current Date
      month: (new Date().getMonth() + 1).toLocaleString(), //Current Month
      year: new Date().getFullYear().toLocaleString(), //Current Year,
      lieu: '',
      description: '',
<<<<<<< HEAD
      nbMaxParticipants: '',
      instruments: [],
      genres: []
=======
      nbMaxParticipants: ''
>>>>>>> c0dd537e65aa200dd90f60ff29dcb3b702ff10a0
    }
  }

  showDateTimePicker() { 
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker() {
    this.setState();
  };

  handleDatePicked(date) {
    console.log("A date has been picked: ", date.getDate());
    console.log("A date has been picked: ", date.getMonth());
    console.log("A date has been picked: ", date.getFullYear());
    this.setState({ day: date.getDate().toLocaleString() }); 
    this.setState({ month: (date.getMonth() + 1).toLocaleString() }); 
    this.setState({ year: date.getFullYear().toLocaleString() }); 
    this.hideDateTimePicker(); 
  };

  componentWillMount() {
    // this.getGenres();
    this.getInstruments();
  }

  // TO-DO : Rajouter bouton "ajouter lieu"
  handleSubmit() {
    console.log("name = " + this.state.name)
    console.log("day = " + this.state.day)
    console.log("month = " + this.state.month)
    console.log("year = " + this.state.year)
    console.log("lieu = " + this.state.lieu)
    console.log("description = " + this.state.description)
    console.log("nbMaxParticipants = " + this.state.nbMaxParticipants)

    fetch('https://56a1c665.ngrok.io/Jam/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }, 
      body: JSON.stringify({
        "date": null,
        "nom": this.state.name,
        "complet": null,
        "nombreMaxParticipants": 0,
        "nombreDeParticipants": 0,
        "description": this.state.description,
        "administrateur": "admin",
        "lieu": this.state.lieu 
      }),
    })
    .then(json => console.log(json))
    //.then(json => this.setState({
    //  name: json.name
    //}))
    .catch(error => console.error(error))
<<<<<<< HEAD
  } 

  getInstruments() {
    fetch('https://56a1c665.ngrok.io/Instrument', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }, 
    })
    // .then(json => console.log(json))
    .then(json => this.setState({
      instruments: json
    }))
    .catch(error => console.error(error))
  }
 
  getGenres() {
    fetch('https://56a1c665.ngrok.io/Genre', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      }, 
    })
    .then(json => function() {
      return json.map(function(prop, i) { 
        return (
          <Picker.Item label={prop} value="Java" /> 
           
        );
      })
    })
    .catch(error => console.error(error))
  }
=======
  }

  // TO-DO : Rajouter bouton "ajouter lieu"
  handleSubmit() {
    console.log(this.state.nbMaxParticipants)
    console.log(this.state.lieu)
    console.log(this.state.description)
  } 
>>>>>>> c0dd537e65aa200dd90f60ff29dcb3b702ff10a0

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.jamContainer}>
<<<<<<< HEAD
            <Text style={styles.title}>CREATION D'UNE JAM</Text>
              
              <View style={styles.inputContainer}>

                <Text style={styles.inputLabel}>Nom de la jam</Text>
                <TextInput style={styles.textInput} editable = {true} maxLength = {40}/>

                <Text style={styles.inputLabel}>Date : {this.state.day} {this.state.month} {this.state.year}</Text> 
                <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                />
                
                <Text style={styles.inputLabel}>Lieu</Text>
                <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({lieu: text})}/>

                <Text style={styles.inputLabel}>Instruments</Text>
                <Picker selectedValque={this.state.language} style={{height: 50, width: 100}} onValueChange={(itemValue, itemIndex) =>  this.setState({language: itemValue}) }>
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker> 

                <Text style={styles.inputLabel}>Genres</Text>
                <Picker selectedValue={this.state.language} style={{height: 50, width: 100}} onValueChange={(itemValue, itemIndex) =>  this.setState({language: itemValue}) }>
                  {this.getGenres()}
                </Picker>

                <Text style={styles.inputLabel}>Description</Text>
                <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({description: text})}/>

                <Text style={styles.inputLabel}>int nombreMaxPariticipants</Text>
                <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({nbMaxParticipants: text})}/>
              
              <Button color='#EC5314' title="Créer Jam" onPress={this.handleSubmit} />
            </View>
=======
            <Text style={styles.title}>Création d'une Jam</Text>
              
              <Text>Nom de la Jam</Text>
              <TextInput style={styles.textInput} editable = {true} maxLength = {40}/>

              <Text>Date : {this.state.day} {this.state.month} {this.state.year}</Text> 
              <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
              
              <Text>Lieu</Text>
              <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({lieu: text})}/>

              <Text>Instruments</Text>
              <Picker selectedValque={this.state.language} style={{height: 50, width: 100}} onValueChange={(itemValue, itemIndex) =>  this.setState({language: itemValue}) }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker> 

              <Text>Genres</Text>
              <Picker selectedValue={this.state.language} style={{height: 50, width: 100}} onValueChange={(itemValue, itemIndex) =>  this.setState({language: itemValue}) }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>

              <Text>Description</Text>
              <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({description: text})}/>

              <Text>int nombreMaxPariticipants</Text>
              <TextInput style={styles.textInput} editable = {true} maxLength = {40} onChangeText={(text) => this.setState({nbMaxParticipants: text})}/>
              
              <Button title="Créer Jam" onPress={this.handleSubmit} />
              
>>>>>>> c0dd537e65aa200dd90f60ff29dcb3b702ff10a0
          </View>
        </ScrollView>
      </View>
    );
  }
}