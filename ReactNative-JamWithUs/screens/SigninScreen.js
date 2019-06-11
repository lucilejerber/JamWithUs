//Auteur : Gaël
//Connexion


import React , { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  TextInput,
  View,
  Button,
  ScrollView
} from 'react-native';

import Logo from '../components/Logo';

export default class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  render() {
    return (
      <View style={styles.container}>
      <Logo/>
        <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
        <TextInput style={styles.inputBox} 
        placeholder='Adresse mail'
        placeholderTextColor='#000'/>
        <TextInput style={styles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor='#000'/>
        <Button title="Connexion" onPress={this._signInAsync} />
        <Button title="S'inscrire" onPress={() => this.props.navigation.navigate('Signup')}/>
        <Button title="Mot de passe oublié" onPress={() => this.props.navigation.navigate('ForgotPassword')}/>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
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
  },
  signupButton : {
    color : '#000',
    fontSize : 12,
    fontWeight : '600'
  }
});