
import React, {Component} from 'react';

import AppNavigator from './navigation/AppNavigator';

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
          <AppNavigator/>
      )
    }
}