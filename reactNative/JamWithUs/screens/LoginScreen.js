import React , { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  StatusBar } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/ConnectionForm';

export default class Login extends Component <{}> {
  render() {
     return (
      <ScrollView style= {styles.container}>
        <Logo/>
        <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
        <Form type = "Connexion"/>
        <View style={styles.signupTextCont}> 
        <Text style={styles.signupText}>Pas encore de compte ? </Text>
          <Text style={styles.signupButton}>Créer un compte </Text>
        </View>
      </ScrollView>
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
    color : '#ffffff',
    fontSize : 12,
    fontWeight : '600'
  }
});