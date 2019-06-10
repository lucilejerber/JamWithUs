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
import Instruments from '../components/Instruments'
import Genres from '../components/Genres'
import JamList from '../components/JamComponent/JamList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 50
  },
  header: {
    marginBottom: 10,
    paddingBottom: 10, 
    backgroundColor:'#EC5314',
    paddingTop: 40, 
  },
  title: { 
    fontWeight: 'bold',
  },
  jamContainer: {
    paddingLeft: 20,
    paddingRight: 20, 
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#f3f3f3', 
    flex: 1,
    flexDirection: 'row',
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
  italic: {
    fontStyle: 'italic'
  },
}); 

export default class JamDescription extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)
    
    this.state = { 
      userId: 1
    } 
  }

  render() { 
    return (
      <View style={styles.container}>
        <JamList userId={this.state.userId}/>
      </View>
    );
  }
} 