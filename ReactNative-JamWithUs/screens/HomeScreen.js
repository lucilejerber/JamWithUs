/*
  This page loads after the user connects in the app.
  It displays all the Jam available

  TO-DO : 
  - add a filter 
  - only get jams after a specific day
*/

import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  StatusBar,
  ScrollView, 
  RefreshControl,
} from 'react-native';

// Constants imported for use
import {TOMCAT, JAM, SHOW, USERID, USER} from '../constants/index'
import {screens, buttons, forms} from '../constants/StylesAll.js'

//  Custom components created
import AllJamList from '../components/JamComponent/AllJamList'
import MenuButton from '../components/MenuButton'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
  };  

  constructor(props) {
    super(props)

    this.state = { 
      userId: USERID,
      jams: [],
      refreshing: false,
      completedProfile: false
    } 
    this._onRefresh = this._onRefresh.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
  }  

  // When we load our page, the first is to get the useful data
  componentWillMount() {
    this.fetchData()
    this.fetchUser()
  }

  // We want to allow our page to reload when we refresh the app
  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData();
    this.fetchUser();
    this.setState({refreshing: false});
  }

  // Fetch all the jams available in the database
  fetchData() {
    var url = TOMCAT + JAM; 

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(json => {
      this.setState({ jams: json});  
    })
    .catch(error => console.error(error))
  }

  // Fetch user data
  // Sets a new state to see if the user is allowed to patiticpate to a jam or not
  fetchUser() {
    var url = TOMCAT + USER + SHOW + "1"; 
    console.log(url)
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(json => {
      if(json.birthday != null) {
        this.setState({ completedProfile: true});  
      } else {
        console.log("Profile not complete")
      }
    })
    .catch(error => console.error(error)) 
  }

  render() {
     return (
      <View style={styles.container}>
        <View style={screens.header}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.title}>Jam</Text>  
        </View>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }> 
          <AllJamList 
            data={this.state.jams} 
            completedProfile={this.state.completedProfile}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    marginBottom: 10, 
    paddingBottom: 10, 
    backgroundColor:'#EC5314',
    paddingTop: 40, 
  },
  title: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginLeft: 60, 
    color: 'white',
  },
}); 

