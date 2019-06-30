//Auteur : Gaël
//Déconnexion


import React , { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {buttons} from '../constants/StylesAll'


export default class SignoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Deconnexion',
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Voulez-vous vraiment vous déconnecter ?</Text>
       <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('Auth')}
                    style={buttons.oui}>
            <Text style={buttons.nameoui}>Oui</Text>
          </TouchableOpacity> 
           <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate("HomeScreen")}
                    style={buttons.non}>
            <Text style={buttons.namenon}>Non</Text>
          </TouchableOpacity> 
      </View>
    );
  }


}

 const styles = StyleSheet.create({
  container : {
    padding: 20,
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'
  }
});