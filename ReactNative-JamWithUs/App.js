import React from 'react';
import {View, StyleSheet} from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';


import * as firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyCQMl7xCchjdWmtHeUYLf282iIPjUqo2oQ",
    authDomain: "jamwithus-8dc09.firebaseapp.com",
    databaseURL: "https://jamwithus-8dc09.firebaseio.com",
    projectId: "jamwithus-8dc09",
    storageBucket: "jamwithus-8dc09.appspot.com",
};

firebase.initializeApp(firebaseConfig);

import * as firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyCQMl7xCchjdWmtHeUYLf282iIPjUqo2oQ",
    authDomain: "jamwithus-8dc09.firebaseapp.com",
    databaseURL: "https://jamwithus-8dc09.firebaseio.com",
    projectId: "jamwithus-8dc09",
    storageBucket: "jamwithus-8dc09.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  render() {
      return (
          <View style={styles.container}>
          	<DrawerNavigator/>
          </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}) 