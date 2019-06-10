import React , { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import Logo from '../components/Logo';
import ConnectionForm from '../components/ConnectionForm';

export default class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
        <ConnectionForm type = "Connexion"/>
        <Button title="Connexion" type='solid' onPress={this._signInAsync} />
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
  signupButton : {
    color : '#000',
    fontSize : 12,
    fontWeight : '600'
  }
});