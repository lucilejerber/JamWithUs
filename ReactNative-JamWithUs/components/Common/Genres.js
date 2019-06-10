import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

/* -----------------
Display genres with name and image
@params : 
this.props.data = array containing genres' id wanted to be display
------------------- */

class Genres extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      genres: [],
      getGenres: 0
    } 

    this.getGenre = this.getGenre.bind(this)
    this.getAllGenres = this.getAllGenres.bind(this)
  } 

  // This function is called everytime a component is updated
  componentDidUpdate() {
    /* -- Get All Genres -- */
    // Because we want to sure make sure we only get the genre once, we add a variable that change after the first call to the DB
    if (this.state.getGenres == 0) { 
      if(this.props.data.length > 0) this.getAllGenres(); // If there is items to be displayed
    }
  }

  getGenre(id) {
    console.log("Call getGenre")
    var url = 'http://729119a4.ngrok.io/Genre/show/' + id;

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
      for (var i = this.state.genres.length - 1; i >= 0; i--) {
        tempJson.push(this.state.genres[i])
      }
      this.setState({ genres: tempJson});  
    })
    .catch(error => console.error(error))
  }

  getAllGenres() {
    console.log("Call getAllGenres")

    this.setState({ getGenres: 1});  
    if((this.props.data.length > 0) && (this.state.genres.length != this.props.data.length)) {
      for (var i = this.props.data.length - 1; i >= 0; i--) {
        this.getGenre(this.props.data[i].id)
      }
    }
  } 

  render() {
    var list;

    if (this.state.getGenres == 1) {
      list = Object.keys(this.state.genres).map((i) => {
        return (
          <View key={i}>
            <Image
              style={styles.image} 
              source={{uri: this.state.genres[i].url}}
            />
            <Text>{this.state.genres[i].name}</Text>
          </View>
        )
      });
    } else {
      return(
        <View>
          <Text>Pas de genre selectionnés</Text>
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

export default Genres