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

// import t from 'tcomb-form-native'; // 0.6.9
// const Form = t.form.Form;

// var Gender = t.enums({
//   M: 'Male',
//   F: 'Female'
// });

// const User = t.struct({
//   nom: t.String,
//   // date: t.Date,
//   nombreDeParticipants:  t.Number, 
//   // lieu: t.Lieu,
//   terms: t.Boolean,
//   gender: Gender // enum
// });
 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)

    this.showDateTimePicker = this.showDateTimePicker.bind(this)
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this)
    this.handleDatePicked = this.handleDatePicked.bind(this)

    this.state = {
      name: '',
      isDateTimePickerVisible: false,
      day: new Date().getDate().toLocaleString(), //Current Date
      month: (new Date().getMonth() + 1).toLocaleString(), //Current Month
      year: new Date().getFullYear().toLocaleString() //Current Year
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.jamContainer}>
              <Text style={styles.title}>Création d'une Jam</Text>
              <Text>Nom de la Jam</Text>
              <TextInput editable = {true} maxLength = {40}/>

              <Text>Date : {this.state.day} {this.state.month} {this.state.year}</Text> 
              <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
              
              <Text>Lieu</Text>
              <TextInput editable = {true} maxLength = {40}/>

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
              <TextInput editable = {true} maxLength = {40}/>

              <Text>int nombreMaxPariticipants</Text>
              <TextInput editable = {true} maxLength = {40}/>
   
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

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
});
