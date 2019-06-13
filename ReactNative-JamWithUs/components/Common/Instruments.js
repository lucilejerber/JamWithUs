import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

/* -----------------
Display Instruments with name and image
@params : 
this.props.data = array containing instruments' id wanted to be display
------------------- */

class Instruments extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      instruments: [],
      getInstruments: 0
    } 

    this.getInstrument = this.getInstrument.bind(this)
    this.getAllInstruments = this.getAllInstruments.bind(this)
  } 

  // This function is called everytime a component is updated
  componentDidUpdate() {
    /* -- Get All Instruments -- */
    // Because we want to sure make sure we only get the instrument once, we add a variable that change after the first call to the DB
    if (this.state.getInstruments == 0) { 
      if(this.props.data.length > 0) this.getAllInstruments(); // If there is items to be displayed
    }
  }

  getInstrument(id) {
    // console.log("Call getInstrument") 
    var url = 'http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/Instrument/show/' + id;
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
      for (var i = this.state.instruments.length - 1; i >= 0; i--) {
        tempJson.push(this.state.instruments[i])
      }
      this.setState({ instruments: tempJson});  
    })
    .catch(error => console.error(error))
  }

  getAllInstruments() {
    // console.log("Call getAllInstruments")

    this.setState({ getInstruments: 1});  
    if((this.props.data.length > 0) && (this.state.instruments.length != this.props.data.length)) {
      for (var i = this.props.data.length - 1; i >= 0; i--) {
        this.getInstrument(this.props.data[i].id)
      }
    }
  } 

  render() {
    var list;

    if (this.state.getInstruments == 1) {
      list = Object.keys(this.state.instruments).map((i) => {
        return (
          <View key={i}>
            <Text>{this.state.instruments[i].name}</Text>
          </View>
        )
      });
    } else {
      return(
        <View>
          <Text>Pas d'instruments selectionnés</Text>
        </View>
      );
    }

    return(
      <View>
        {list}
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: 'gray'
  },

})

export default Instruments