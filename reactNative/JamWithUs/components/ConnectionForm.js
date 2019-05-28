import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

  export default class Form extends Component <{}> {


  render() {
     return (
     	<View style ={FormStyles.container}>
        <TextInput style={FormStyles.inputBox} 
        placeholder='Adresse mail'
        placeholderTextColor='ffffff'/>
        <TextInput style={FormStyles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor='ffffff'/>
     	</View> 
    	)
  	}
}

const FormStyles = StyleSheet.create({
 container : {
    padding: 20
  },
 inputBox :{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.7)',
    marginBottom: 10,
    padding: 10,
    color: '#000000'
  },
  buttonText :{
    fontSize: 16,
    fontWeight: '500',
    textAlign:'center'
  }

});