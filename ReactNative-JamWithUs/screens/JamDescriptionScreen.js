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
  Button,
} from 'react-native';



export default class JamDescription extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  
  constructor(props) {
    //super(props)
    
    this.state = {
      userId: 1
	};
  }

  render() { 
    return (
      <View>
        <Text>Jam List</Text>
      </View>
    );
  }
} 