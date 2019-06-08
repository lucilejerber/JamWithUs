import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  ScrollView } from 'react-native';

import Login from './LoginScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
     return (
      <ScrollView>
      <Text styles={styles.title}> Accueil </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize : 24,
    height : 40,
  },
});
