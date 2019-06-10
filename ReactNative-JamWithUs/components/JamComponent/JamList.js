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
import Jam from './Jam'

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

export default class JamList extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)
    
    this.state = { 
      jams: [],
      getJams: 0
    } 
  }

  // This function is called everytime a component is updated
  componentDidUpdate() {
    /* -- Get All Genres -- */
    // Because we want to sure make sure we only get the genre once, we add a variable that change after the first call to the DB
    if (this.state.getJams == 0) { 
      if(this.props.data.length > 0) this.getAllJams(); // If there is items to be displayed
    }
  }

  getJam() {
    var userId = {this.props.userId};
    console.log(userId)
    var url = 'http://bd5dc599.ngrok.io/User/show/' + userId;
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(json => {
      var tempJson = [json];
      for (var i = this.state.jams.length - 1; i >= 0; i--) {
        tempJson.push(this.state.jams[i])
      }
      this.setState({ jams: tempJson});  
    })
    .catch(error => console.error(error))
  }

  getAllJams() {
    this.setState({ getJams: 1});  
    if((this.props.data.length > 0) && (this.state.jams.length != this.props.data.length)) {
      for (var i = this.props.data.length - 1; i >= 0; i--) {
        this.getJam(this.props.data[i].id)
      }
    }
  } 

  render() {
    var jamList;

    if (this.state.getGenres == 1) {
      list = Object.keys(this.state.jams).map((i) => {
        return (
          <Jam data={this.state.jams[i]} key={i}/>
        )
      });
    } else {
      return(
        <View>
          <Text>Pas de jams</Text>
        </View>
      );
    }

    return(
      <View>
        {jamList}
      </View>
    )
  }
} 