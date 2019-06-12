import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button,
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar } from 'react-native';

//page post mdp oublié
class PostForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Mot de passe oublié',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Votre mot de passe a été réinitialisé. Un mail contenant votre mot de passe temporaire vous a été envoyé :)</Text>
        <Button title="Revenir à l'accueil" onPress={() => this.props.navigation.navigate('SignIn')}/>
      </View>
    );
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