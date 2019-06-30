/*
  Diplays a search list of a  locations
*/

import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class FormLocation extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      name: '',
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_2 : '',
      administrative_area_level_1 : '',
      country : '',
      postal_code: '',
      capacity : 0,
      availability: true,
      resultsDisplayed: true
    } 
  }

  render() { 
    return (
      <GooglePlacesAutocomplete
        placeholder='Enter Location'
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
      styles={{
        textInputContainer: {
          height: 50,
          marginLeft: 40,
          marginRight: 40,
          marginBottom: 10,
          backgroundColor: '#f3f3f3', 
          borderRadius: 20,
          borderTopWidth: 0,
          borderBottomWidth:0
        },
        textInput: {
          backgroundColor: '#f3f3f3', 
        },
        description: {
          fontWeight: 'bold',
          marginLeft: 40,
          marginRight: 40,
        },
      }}
        currentLocation={false}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: '',
          language: 'fr', // language of the results
        }}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          // console.log(details);
          this.props.handler(details);
          this.state.resultsDisplayed
          this.setState({ resultsDisplayed: false}); 

        }}
        listViewDisplayed={this.state.resultsDisplayed}
      />
    );
  }
}

export default FormLocation
