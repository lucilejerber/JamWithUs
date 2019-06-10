import React , { Component } from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

//Page de déconnexion
export default class SignoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Deconnexion',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Deconnexion" onPress={this._signOutAsync} />
      </View>
    );
  }


  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

 const styles = StyleSheet.create({
  container : {
    padding: 20,
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'
  }
});