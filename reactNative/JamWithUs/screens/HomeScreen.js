import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  StatusBar } from 'react-native';

import Login from './LoginScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /*componentWillMount(){ // fait des trucs sur la page en arriere plan a l'ouverture par exemple appel BDD
    fetch('http://ee9666f4.ngrok.io', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
    })
    .then(json => console.log(json))
    //.then(json => this.setState({
      //  name: json.name
      //}))
    .catch(error => console.error(error))

    fetch('https://d7642d77.ngrok.io/Jam/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      },
      body: JSON.stringify({
        "date": this.state.date,
        "nom": this.state.name,
        "complet": null,
        "nombreMaxParticipants": 0,
        "nombreDeParticipants": 0,
        "description": this.state.description,
        "administrateur": "admin",
        "lieu": this.state.lieu
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
  }*/

  render() {
     return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#000000" ,
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'
  }
});