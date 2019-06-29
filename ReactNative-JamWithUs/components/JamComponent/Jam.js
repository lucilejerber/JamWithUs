/*
  Displays one jam
*/

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert, 
} from 'react-native';

import Instruments from '../Common/Instruments'
import Genres from '../Common/Genres'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginTop: 50
  },
  jamContainer: {
    paddingLeft: 20,
    paddingRight: 20, 
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#f3f3f3', 
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  bold: { 
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic'
  },
}); 

export default class Jam extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)
    
    this.state = { 
      name: '',
      date: new Date(),
      admin: '',
      locationName: '',
      locationAdress: '',
      latitude: '',
      longitude: '',
      description: '',
      maxParticipants: '',
      instruments: [],
      genres: [],
    } 
    this.handleTouch = this.handleTouch.bind(this)
    this._displayDetailForProfil = this._displayDetailForProfil.bind(this)
  }

    
  componentDidMount() {
    // console.log("Alllleeeeeeerrrrtttttt")
    // console.log(this.props.data)

    this.setState({ name: this.props.data.name}); 
    this.setState({ date: new Date(this.props.data.date)}); 
    // this.setState({ admin: json.admin}); 
    this.setState({ locationName: this.props.data.locationName}); 
    this.setState({ locationAdress: this.props.data.locationAdress}); 
    this.setState({ latitude: this.props.data.latitude}); 
    this.setState({ longitude: this.props.data.longitude}); 
    this.setState({ description: this.props.data.description}); 
    this.setState({ maxParticipants: this.props.data.maxParticipants}); 
    this.setState({ genres: this.props.data.genres}); 
    this.setState({ instruments: this.props.data.instruments}); 
    this.setState({ numberParticipants: this.props.data.numberParticipants}); 
  }
 
  // function that hanble user touch
  handleTouch() {
    if (this.props.completedProfile) {
      console.log("OK")
      Alert.alert(
        'La demande a été prise en compte.',
        "Veuillez attendre la réponse de l'organisateur.",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('Ok')},
        ],
        {cancelable: false},
      );

    } else {
      console.log("Not  ok")

      Alert.alert(
        'Complète ton profil pour accéder à la Jam!',
        '',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this._displayDetailForProfil()},
        ],
        {cancelable: false},
      );
    }
  }

  _displayDetailForProfil() {
    console.log("Modifier Profil")
    this.props.navigation.navigate("ProfilForm")
  }

  render() { 
    return (
      <View style={styles.jamContainer}>
      <TouchableOpacity onPress={this.handleTouch}>
        <View style={{flex: 1}}>
          <Text style={styles.bold}>{this.state.date.toLocaleDateString("fr-FR")}</Text> 
          <Text>{this.state.date.toLocaleTimeString()}</Text> 
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.bold}>{this.state.name}</Text>  
              
          <Text>{this.state.locationName} {this.state.locationAdress}</Text>
              
          <Text style={styles.italic}>{this.state.description}</Text>

          <Text style={styles.italic}>{this.state.numberParticipants} participants sur {this.state.maxParticipants}</Text>
            
          <Text style={styles.inputLabel}>Instruments</Text>
          <Instruments data={this.state.instruments}/>
                   
          <Text style={styles.inputLabel}>Genres</Text>
          <Genres data={this.state.genres}/>
        </View>    
       </TouchableOpacity>

      </View>
    );
  }
} 