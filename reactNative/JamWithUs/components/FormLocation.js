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
      availability: true
    } 
  }


  // TO-DO : Rajouter bouton "ajouter lieu"
  handleSubmit(details) {  
    this.setState({ name: details.name });
    this.setState({ capacity: 4 });
    this.setState({ availability: true });

    for (var i = details.address_components.length - 1; i >= 0; i--) {
      switch (details.address_components[i].types[0]) {
        case 'locality':
          this.setState({ locality: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + "  = " + details.address_components[i].long_name)
          break;
        case 'postal_code':
          this.setState({ postal_code: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + "  = " +  details.address_components[i].long_name)
          break;
        case 'country':
          this.setState({ country: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + "     = " + details.address_components[i].long_name)
          break;
        case 'administrative_area_level_2':
          this.setState({ administrative_area_level_2: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + " = " + details.address_components[i].long_name)
          break;
        case 'administrative_area_level_1':
          this.setState({ administrative_area_level_1: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + " = " + details.address_components[i].long_name)
          break;
        case 'route':
          this.setState({ route: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + " = " + details.address_components[i].long_name)
          break;
        case 'street_number':
          this.setState({ street_number: details.address_components[i].long_name });
          console.log(details.address_components[i].types[0] + " = " + details.address_components[i].long_name)
          break;
        default:
          console.log(details.address_components[i].types[0] + " = " + details.address_components[i].long_name)
      }
    }

    var body = { 
      "name": this.state.name,
      "street_number": this.state.street_number, 
      "route": this.state.route, 
      "locality": this.state.locality,
      "administrative_area_level_2": this.state.administrative_area_level_2,
      "administrative_area_level_1": this.state.administrative_area_level_1,
      "country": this.state.country,
      "postal_code": this.state.postal_code,
      "capacity": this.state.capacity,
      "availability": this.state.availability
    }

    console.log("body.street_number")
    console.log(body.street_number)
    console.log("body.route")
    console.log(body.route)
    console.log("body.postal_code")
    console.log(body.postal_code)
 
    fetch('http://55ed49af.ngrok.io/Location/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))
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
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth:0
          },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
               color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
          currentLocation={false}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyACQlodCoybhH4bhs6WoVscVcyIuYnAoDQ',
             language: 'fr', // language of the results
          }}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            // console.log(details);
            this.handleSubmit(details);
          }}
        />
      );
  	}
}

export default FormLocation
