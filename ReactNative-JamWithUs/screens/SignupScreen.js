
//Auteur : Gaël
//Création de compte


import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  StyleSheet, 
  Text,
  Button,
  TextInput,
  View,
  StatusBar } from 'react-native';

import Logo from '../components/Logo';

import {screens, buttons, forms} from '../constants/StylesAll'

import {TOMCATSAVE} from '../constants/index';


export default class SignupScreen extends Component <{}> {

  constructor(props){
      super(props);
      this.userSignup = this.userSignup.bind(this)
      this.state =({
      username:'',
      mail: '',
      password:''
        })
      }  

//fonction creation compte
userSignup() {
  console.log("username = " + this.state.username)
  console.log("mail = " + this.state.mail)
  console.log("password = " + this.state.password)


  fetch(TOMCATSAVE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "username": this.state.username,
        "mail": this.state.mail, 
        "password": this.state.password,
      }),
    })
  //print the response in console
    .then((response) => {
    //console.log(TOMCATSAVE)
    if (response.ok) { 
    this._signInAsync;
    Alert.alert(
        'Bienvenue dans Jam With Us !',
        "Complète ton profil pour participer aux jams.",
        [
          {text: 'Cancel', onPress: () => this.props.navigation.navigate("HomeScreen") },
          {text: 'OK', onPress: () => this.props.navigation.navigate("ProfilForm") },
        ],
        {cancelable: false},
    );
    this.props.navigation.navigate('App');
    } else {
      console.log('connexion nok');
    Alert.alert("Veuillez vérifier que les champs soient conformes");
    }
  })
 
.catch((error) => {
      //console.log(error);
      this.onRegistrationFail();
    });
  }

_signInAsync = async () => {
    await AsyncStorage.setItem('userToken',1);
  };

  onRegistrationFail() {
    this.setState({
      error: 'Registration Failed',
    });
    Alert.alert("Erreur");
  }

    render() {
    return (
      <View style={styles.container}>
      <Logo/>
        <TextInput style={forms.input}
        placeholder="nom d'utilisateur"
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => this.setState({username: text})}
        placeholderTextColor='#000'/>
        <TextInput style={forms.input}
        placeholder='email'
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => this.setState({mail: text})}
        placeholderTextColor='#000'/>
        <TextInput style={forms.input}
        placeholder='Mot de passe'
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => this.setState({password: text})}
        secureTextEntry={true}
        placeholderTextColor='#000'/>
        <Button
          title='Créer un compte' onPress={this.userSignup}
        />
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