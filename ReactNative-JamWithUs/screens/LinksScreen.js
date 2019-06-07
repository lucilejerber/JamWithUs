/* 
Laura
*/
import React, {Component} from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';

import MenuButton from '../components/MenuButton'

class LinksScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Links',
  };*/

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Links</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    //alignItems:'center',
  },
  text:{
    fontSize: 30,
  }
});

export default LinksScreen;
