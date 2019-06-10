import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  StatusBar } from 'react-native';

import Logo from '../components/Logo';
import Form2 from '../components/Form';

export default class SignUp extends Component <{}> {
  render() {
     return (
      <View style= {styles.container}>
        <Form2 type = "Créer un compte"/>
        <View style={styles.signupTextCont}> 
          <Text style={styles.signupText}>Vous avez déjà un compte ? </Text>
          <Text style={styles.signupButton}> Se connecter</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#000000" ,
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
  }
});