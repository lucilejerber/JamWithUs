import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
  }

  componentDidMount() {
    console.log("Alllleeeeeeerrrrtttttt")
    console.log(this.props.data)
    var url = 'http://7169c2da.ngrok.io/Jam/show/' + this.props.data;

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(json => {
        this.setState({ name: json.name}); 
        this.setState({ date: new Date(json.date)}); 
        // this.setState({ admin: json.admin}); 
        this.setState({ locationName: json.locationName}); 
        this.setState({ locationAdress: json.locationAdress}); 
        this.setState({ latitude: json.latitude}); 
        this.setState({ longitude: json.longitude}); 
        this.setState({ description: json.description}); 
        this.setState({ maxParticipants: json.maxParticipants}); 
        this.setState({ genres: json.genres}); 
        this.setState({ instruments: json.instruments}); 
        this.setState({ numberParticipants: json.numberParticipants}); 
      })
    .catch(error => console.error(error))
  }

  render() { 
    return (
      <View style={styles.jamContainer}>
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
      </View>
    );
  }
} 