/* 
Laura
*/
import React, {Component} from 'react';
import { ScrollView, StyleSheet,Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'

class ProfilScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuButton/>
        <Text style={styles.text}> Profil </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 40,
    //textAlign: 'center',
  }
})

export default ProfilScreen;
