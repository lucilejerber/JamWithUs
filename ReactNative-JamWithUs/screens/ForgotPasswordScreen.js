import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar } from 'react-native';

export default class ForgotPasswordScreen extends Component <{}> {
  render() {
     return (
      <View>
         <TextInput style={styles.inputBox} 
        placeholder='Votre adresse mail'
        placeholderTextColor='#ffffff'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    padding: 20,
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'
  },
  signupTextCont : {
    flexGrow : 1,
    alignItems : 'center',
    justifyContent : 'flex-end',
    marginVertical : 16,
    flexDirection : 'row'
  },
  signupText : {
    color : '#ffffff',
    fontSize : 12
  },
  signupButton : {
    color : '#ffffff',
    fontSize : 12,
    fontWeight : '600'
  },
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