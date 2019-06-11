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
<<<<<<< HEAD
     		<Image style = {{width:200, height:200}}
     			source={require('../images/logo.jpg')}/>
=======
     		<Image style = {{width:250, height:150}}
     			source={require('../images/jamwithus.jpeg')}/>
>>>>>>> parent of e60e6407... update signup/signin
     	</View> 
    	)
  	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow : 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  }
});