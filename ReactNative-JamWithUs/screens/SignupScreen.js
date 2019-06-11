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


export default class Signup extends Component <{}> {
    render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
        placeholder='Votre nom'
        placeholderTextColor='#fff'/>
        <TextInput style={styles.inputBox}
        placeholder='Votre adresse mail'
        placeholderTextColor='#fff'/>
        <TextInput style={styles.inputBox}
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor='#fff'/>
        <Button
          title="Créer un compte"
          onPress={this._signInAsync}
        />
      </View>
    )
  }
    _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
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