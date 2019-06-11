/*
inscription
Auteur: Gael
*/


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
import TOMCATSAVE from '../constants/url';


export default class Signup extends React.Component {  
  constructor(props){
    super(props)
    this.signupUser = this.signupUser.bind(this)
    this.state = ({
    username:'',
    mail: '',
    password:''
      })
    }  

signupUser() {
    console.log("usermame = " + this.state.username)
    console.log("mail = " + this.state.mail)
    console.log("password = " + this.state.password)

    fetch(TOMCATSAVE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      }, 
      body: JSON.stringify({
        "username": this.state.username,
        "mail": this.state.mail,
        "password": this.state.password, 
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
  }

  render() {
    //console.log(this.props)
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        placeholder="nom d'utilisateur"
        onChangeText={(text) => this.setState({username: text})}
        placeholderTextColor='#ffffff'/>
         <TextInput style={styles.inputBox} 
        placeholder='adresse mail'
        onChangeText={(text) => this.setState({mail: text})}
        placeholderTextColor='#ffffff'/>
        <TextInput style={styles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}
        placeholderTextColor='#ffffff'/>
        <Button
          title="Créer un compte"
          onPress={()=> this.signupUser()}
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