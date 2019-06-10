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
import Instruments from '../components/Instruments'
import Genres from '../components/Genres'
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