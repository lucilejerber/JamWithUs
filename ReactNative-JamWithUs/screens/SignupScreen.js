//Auteur : Gaël
//Création de compte

import React, { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  Button,
  TextInput,
  View,
  StatusBar } from 'react-native';

import LOCALSAVE from '../constants/url';

export default class Signup extends Component <{}> {

  constructor(props){
      super(props);
  
      this.state =({
      username:'',
      mail: '',
      password:''
        })
      }  
  
 userSignUp() {
  
  }   


    render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
        placeholder="nom d'utilisateur"
        onChangeText={(text) => this.setState({username: text})}
        placeholderTextColor='#fff'/>
        <TextInput style={styles.inputBox}
        placeholder='email'
        onChangeText={(text) => this.setState({mail: text})}
        placeholderTextColor='#fff'/>
        <TextInput style={styles.inputBox}
        placeholder='Mot de passe'
        onChangeText={(text) => this.setState({password: text})}
        secureTextEntry={true}
        placeholderTextColor='#fff'/>
        <Button
          title='Créer un compte'
          onPress={this.userSignUp}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    padding : 20
  },
  inputBox :{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.7)',
    marginBottom: 10,
    padding: 10
  }
});