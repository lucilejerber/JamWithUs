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
    } 

  }

  // This function is called everytime a component is updated
  componentDidMount() {
    var userId = this.props.userId;
    console.log("JamList userId = " + userId)

    var url = 'http://729119a4.ngrok.io/User/show/' + userId;
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(json => {
      console.log(json.jams)
      console.log(json.jams.length)
      this.setState({ jams: json});  
    })
    .catch(error => console.error(error))
  }

  render() {
    var jamList;

    if (this.state.jams.length > 1) {
      list = Object.keys(this.state.jams).map((i) => {
        return (
          <Jam data={this.state.jams[i].id} key={i}/>
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