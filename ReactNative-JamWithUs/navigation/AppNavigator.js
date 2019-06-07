import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Dimensions,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/LoginScreen';
import Profil_Display from '../components/Profil_Display';
import HomeScreen from '../screens/HomeScreen';
import ProfilForm from '../components/ProfilForm';
import ProfilScreen from '../screens/ProfilScreen';
import JamForm from '../screens/JamFormScreen';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerwidth: WIDTH*0.43,
}

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };

  render() {
    return (
      <View style={styles.container}>
      <Login/>
        <Button title="Connexion" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}


class Signout extends React.Component {
  static navigationOptions = {
    title: 'Deconnexion',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Deconnexion" onPress={this._signOutAsync} />
      </View>
    );
  }


  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const AppStack = createDrawerNavigator({HomeScreen: HomeScreen, JamForm: JamForm,ProfilDisplay: Profil_Display,ProfilForm: ProfilForm, Signout: Signout}, DrawerConfig,);
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
