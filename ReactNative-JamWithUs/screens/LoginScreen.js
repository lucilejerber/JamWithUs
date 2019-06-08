import React , { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  StatusBar } from 'react-native';

import Logo from '../components/Logo';
import ConnectionForm from '../components/ConnectionForm';

export default class Login extends Component <{}> {
  render() {
     return (
      <View style= {styles.container}>
        <Logo/>
        <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
        <ConnectionForm type = "Connexion"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#fff" ,
    flex : 1,
  },
  signupText : {
    color : '#000',
    fontSize : 12
  },  
  logoText : {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  signupButton : {
    color : '#000',
    fontSize : 12,
    fontWeight : '600'
  }
});