/*import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'

class UserItem extends React.Component {
  render() {
    const { user, displayDetailForProfil } = this.props
    return (
		<TouchableOpacity       
      onPress={()=> displayDetailForProfil(user.id)}
      style={styles.main_container}>
        <View style={styles.content_container}>
          
          <View style={styles.header_container}>
            <Text style={styles.title_text}>surnom</Text>
            <Text style={styles.description_text}>{user.username}</Text>
          </View>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>mail</Text>
            <Text style={styles.description_text}>{user.mail}</Text>
          </View>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>Date de Naissance</Text>
            <Text style={styles.description_text}>{user.birthday}</Text>
          </View>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>Numéro de Téléphone(s)</Text>
            <Text style={styles.description_text}>{user.phoneNumber}</Text>
          </View>
		  <View style={styles.header_container}>
            <Text style={styles.title_text}>Pays(s)</Text>
            <Text style={styles.description_text}>{user.country}</Text>
          </View>
		  
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },

  content_container: {
    flex: 1,
    margin: 5
  },

  header_container: {
    flex: 3,
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },

  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },

  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },

  date_container: {
    flex: 1
  },

  date_text: {
    textAlign: 'right',
    fontSize: 14
  }

})

export default UserItem*/