import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView } from 'react-native';

import Login from './LoginScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
     return (
      <ScrollView>
      </ScrollView>
    );
  }
}