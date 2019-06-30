//Auteur: Gaël
//Logo

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image
} from 'react-native';

  export default class Logo extends Component <{}> {
  render() {
     return (
     	<View style ={styles.container}>
     		<Image
     			source={require('../images/jamwithusfinal.png')}/>
     	</View> 
    	)
  	}
}

const styles = StyleSheet.create({
  container : {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center'
  }
});