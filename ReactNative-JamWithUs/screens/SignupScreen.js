import React, { Component } from 'react';
import { 
  AsyncStorage,
  Button,
  StyleSheet, 
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar } from 'react-native';


export default class Signup extends React.Component {
      render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        placeholder='Votre nom'
        placeholderTextColor='#ffffff'/>
         <TextInput style={styles.inputBox} 
        placeholder='Votre adresse mail'
        placeholderTextColor='#ffffff'/>
        <TextInput style={styles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        placeholderTextColor='#ffffff'/>
        <TextInput style={styles.inputBox} 
        placeholder='Confirmer mot de passe'
        secureTextEntry={true}
        placeholderTextColor='#ffffff'/>
        <Button
          title="Créer un compte"
          onPress={this._signInAsync}
        />
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