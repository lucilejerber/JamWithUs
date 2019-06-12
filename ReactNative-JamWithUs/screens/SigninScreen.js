//Auteur : Gaël
//Connexion


import React , { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  StyleSheet, 
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import {TOMCATUSERSEARCH} from '../constants/index'
import {screens, buttons, forms} from '../constants/StylesAll'


export default class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };

  constructor(props){
      super(props);
      this.userSignin = this.userSignin.bind(this)
      this.state =({
      mail: '',
      password:''
        })
      }  

    _signInCheck(data: string ){
    console.log(data)
    console.log(data[0].mail)
    console.log(data[0].password)
      if(data[0].mail == this.state.mail && data[0].password == this.state.password){
        this._signInAsync;
        this.props.navigation.navigate('App');
        console.log('connexion ok');
      }
      else {
      console.log('connexion nok');
      Alert.alert("Adresse mail / mot de passe incorrects.");
      }
}
    

 _signInAsync = async () => {
    await AsyncStorage.setItem('userToken',1);
  };

  onLoginFail() {
    this.setState({
      error: 'Registration Failed',
    });
    Alert.alert("Erreur.");
  }

//fonction creation compte
userSignin() {
  console.log("mail = " + this.state.mail)
  console.log("password = " + this.state.password)


  fetch(TOMCATUSERSEARCH+this.state.mail, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        "mail": this.state.mail, 
        "password": this.state.password,
      }),
    })
   
    .then((response) => response.json())
    .then((data) => { //convert json in string
    this._signInCheck(data) //handle the response 
    })
.catch((error) => {
      //console.log(error);
      this.onLoginFail();
    });
  }

 _signInAsync = async () => {
    await AsyncStorage.setItem('userToken',);
    this.props.navigation.navigate('App');
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
        placeholder='Adresse mail'
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text) => this.setState({mail: text})}
        placeholderTextColor='#000'/>
        <TextInput style={forms.input} 
        placeholder='Mot de passe'
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}
        placeholderTextColor='#000'/>
        {/*<Button title="Connexion" onPress={this.userSignin} />*/}
        <TouchableOpacity 
            /*onPress={()=> this.props.navigation.navigate("HomeScreen")}*/
        onPress={this.userSignin}
        style={buttons.opacity}>
          <Text style={buttons.name}>Connexion</Text>
        </TouchableOpacity> 
        <TouchableOpacity 
        onPress={()=> this.props.navigation.navigate("Signup")}
        style={buttons.opacity}>
            <Text style={buttons.name}>S'inscrire</Text>
        </TouchableOpacity> 
      </View>
    );
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