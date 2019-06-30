/* 
Laura 
Bouton pour le menu tiroir
*/
import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MenuButton extends React.Component {
  render() {
    return (
      <Ionicons
        raised
        name='md-menu'
        size={32}
        color='#000000'
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()} 
      />
    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: 40,
    left: 20,
  }
})

export default MenuButton;