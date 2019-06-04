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