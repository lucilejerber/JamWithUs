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

    this.state = {
      name: '',
      isDateTimePickerVisible: false,
      day: new Date().getDate().toLocaleString(), //Current Date
      month: (new Date().getMonth() + 1).toLocaleString(), //Current Month
      year: new Date().getFullYear().toLocaleString(), //Current Year,
      lieu: '',
      description: '',
      nbMaxParticipants: ''
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
    fetch('https://cc92b254.ngrok.io/genre', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
    })
    .then(json => console.log(json))
    //.then(json => this.setState({
    //  name: json.name
    //}))
    .catch(error => console.error(error))
  }

  // TO-DO : Rajouter bouton "ajouter lieu"
  handleSubmit() {
    console.log(this.state.nbMaxParticipants)
    console.log(this.state.lieu)
    console.log(this.state.description)
  } 

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.jamContainer}>
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
              
          </View>
        </ScrollView>
      </View>
    );
  }
}