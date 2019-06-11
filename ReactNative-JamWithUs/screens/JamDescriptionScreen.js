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
import FormLocation from '../components/Common/FormLocation';

import DatePicker from 'react-native-datepicker';
import MultiSelect from 'react-native-multiple-select';

import MenuButton from '../components/MenuButton'
import Instruments from '../components/Common/Instruments'
import Genres from '../components/Common/Genres'
import JamList from '../components/JamComponent/JamList'

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    height: '100%',
    marginTop: 50 
  },
}); 
   
export default class JamDescription extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)
     
    this.state = {
      userId: 1,
      jamId: 1,

      name: '',
      date: '',
      locationName: '',
      locationAdress: '',
      latitude: '',
      longitude: '',
      description: '',
      numberParticipants: 0,
      maxParticipants: 0,
      gens: '',
      instruments: '', 
      genres: ''
    }
  } 

    // Request to the data base to get instruments
  componentWillMount() {  
    var url = 'http://02c25d34.ngrok.io/JamWithUs-0.6/Jam/show/' + this.state.jamId;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      }, 
    })
    .then((response) => response.json())
    .then((json) => {
        this.setState({ name: json.name}); 
        this.setState({ date: new Date(json.date)}); 
        this.setState({ locationName: json.locationName}); 
        this.setState({ locationAdress: json.locationAdress}); 
        this.setState({ latitude: json.latitude}); 
        this.setState({ longitude: json.longitude}); 
        this.setState({ description: json.description}); 
        this.setState({ numberParticipants: json.numberParticipants});
        this.setState({ maxParticipants: json.maxParticipants}); 
        this.setState({ gens: json.gens}); 
        this.setState({ instruments: json.instruments});  
        this.setState({ genres: json.genres});  
    })
    .catch((error) => {
      console.error(error);
    });
  }
   
  render() {
    return (
      <View style={styles.container}>
        <JamList userId={this.state.userId}/>
      </View>
    );
  }
} 