import React , { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';

import Logo from '../components/Logo';

export default class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };

  constructor(props){
    super(props);

    this.state =({
    email: '',
    password:''
      })
    }  

loginUser = (email, password) =>{
}


  render() {
    return (
      <View style={styles.container}>
      <Logo/>
        <TextInput 
        style={styles.inputBox} 
        placeholder='Adresse mail'
        placeholderTextColor='#000'
        color='#000'
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(email) => this.setState({email})}
        autoCorrect={false}/>

        <TextInput style={styles.inputBox} 
        placeholder='Mot de passe'
        secureTextEntry={true}
        returnKeyType="go"
        placeholderTextColor='#000'
        onChangeText={(password) => this.setState({password})}
        color='#000'/>
      <TouchableOpacity style={styles.signupButton} onPress={()=> this.loginUser(this.state.email,this.state.password)} /*{this._signInAsync}*/>
        <Text>Se connecter</Text> 
      </TouchableOpacity>  

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
        <Text>S'inscrire</Text> 
      </TouchableOpacity>
      <TouchableOpacity type=''style={styles.button} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
        <Text>Mot de passe oublié</Text> 
      </TouchableOpacity>
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
    flex:1,
    padding:20,
    justifyContent:'center'
  },
  signupText : {
    color : '#000',
    fontSize : 12
  },  
  inputBox :{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    paddingHorizontal: 40,
  },
  signupButton : {
    alignItems:'center',
    padding:10 ,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#f3f3f3',
    fontSize : 12,
    fontWeight : '600'
  },
    button : {
    alignItems:'center',
    padding:10 ,
    marginBottom: 10,
    backgroundColor: '#f3f3f3',
    fontSize : 12,
    fontWeight : '600'
  }
});