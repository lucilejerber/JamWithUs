import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";


import Login from './screens/LoginScreen';

export default class App extends Component <{}>{
  render() {
     return (
      <View style={styles.container}>
      <StatusBar 
      backgroundColor = "#000000"
      barStyle="light-content"
      />
      <Login/>
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