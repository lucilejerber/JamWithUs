import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  StatusBar } from 'react-native';

import Login from './LoginScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentWillMount(){ // fait des trucs sur la page en arriere plan a l'ouverture par exemple appel BDD
    fetch('http://938455a2.ngrok.io', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
    })
    .then(json => console.log(json))
    //.then(json => this.setState({
      //  name: json.name
      //}))
    .catch(error => console.error(error))

    {/*fetch('https://d7642d77.ngrok.io/Jam/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      },
      body: JSON.stringify({
        "date": this.state.date,
        "nom": this.state.name,
        "complet": null,
        "nombreMaxParticipants": 0,
        "nombreDeParticipants": 0,
        "description": this.state.description,
        "administrateur": "admin",
        "lieu": this.state.lieu
      }),
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))*/}
  }

  render() { //affiche des trucs sur la page
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload. 
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#000000" ,
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center'
  }
});