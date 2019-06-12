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
import DeviceStorage from '../components/DeviceStorage'; // Import deviceStorage :)


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

    _response_recognizer(data: string ){
    console.log(data[0].password)//print string
    }

 _signInAsync = async () => {
    await AsyncStorage.setItem('userToken',1);
    this.props.navigation.navigate('App');
  };

  onRegistrationFail() {
    this.setState({
      error: 'Registration Failed',
    });
    Alert.alert("Erreur");
  }

//fonction creation compte
userSignin() {
  console.log("mail = " + this.state.mail)
  console.log("password = " + this.state.password)


  fetch('http://effundo.serveo.net/user/search?q='+this.state.mail, {
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
    this._response_recognizer(data) //handle the response 
    })
.catch((error) => {
      //console.log(error);
      this.onRegistrationFail();
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
        <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
        <TextInput style={styles.inputBox} 
        placeholder='Adresse mail'
        onChangeText={(text) => this.setState({mail: text})}
        placeholderTextColor='#000'/>
        <TextInput style={styles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}
        placeholderTextColor='#000'/>
        <Button title="Connexion" onPress={this.userSignin} />
        <Button title="S'inscrire" onPress={() => this.props.navigation.navigate('Signup')}/>
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