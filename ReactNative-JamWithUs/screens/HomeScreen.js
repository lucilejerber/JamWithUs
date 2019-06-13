import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  StatusBar,
  ScrollView, 
  RefreshControl,
} from 'react-native';

import Login from './LoginScreen';
import AllJamList from '../components/JamComponent/AllJamList'
import {TOMCAT, JAM, SHOW, USERID, USER} from '../constants/index'

import MenuButton from '../components/MenuButton'
import {screens, buttons, forms} from '../constants/StylesAll.js'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
  };  

  constructor(props) {
    super(props)

    this.state = { 
      url: '',
      userId: 1,
      jams: [],
      refreshing: false,
      completedProfile: false
    } 
    this._onRefresh = this._onRefresh.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.fetchUser = this.fetchUser.bind(this)

  }  

  componentWillMount() {
    this.fetchData()
    this.fetchUser()
  }

  componentDidUpadte() {
    this.fetchData()
    this.fetchUser()
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData();
    this.fetchUser();

    this.setState({refreshing: false});
  }

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
      console.log(json)
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

