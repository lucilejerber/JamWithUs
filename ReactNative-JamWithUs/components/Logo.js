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
     		<Image style = {{width:250, height:150}}
     			source={require('../images/jamwithus.jpeg')}/>
         <Text style={styles.logoText}>Bienvenue dans Jam With Us.</Text>
     	</View> 
    	)
  	}
}

const styles = StyleSheet.create({
  container : {
    padding:20,
    alignItems:'center',
    marginBottom: 10
  },
    logoText : {
    marginVertical: 15,
    fontSize: 18,
    color: '#000'
  }
});
