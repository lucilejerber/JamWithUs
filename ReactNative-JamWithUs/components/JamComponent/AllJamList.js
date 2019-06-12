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

export default class AllJamList extends React.Component { 
  static navigationOptions = {
    header: null,
  }; 
  constructor(props) {
    super(props)
    
    this.state = { 
    } 
  }

 
  render() {
    var jamList;

    if (this.props.data.length >= 1) {
      jamList = Object.keys(this.props.data).map((i) => {
        return (
          <Jam 
            data={this.props.data[i]} 
            key={i} 
            completedProfile={this.props.completedProfile}
            navigation={this.props.navigation}
          />
        )
      });
    } else { 
      return(
        <View> 
          <Text>Pas de jam</Text>
        </View>
      );
    }

    return(
      <ScrollView style={styles.container}>
        {jamList}
      </ScrollView>
    )
  }
}  