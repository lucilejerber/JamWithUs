import React from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Dimensions,
  AsyncStorage,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer } from 'react-navigation';

import Login from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Profil_Display from '../components/Profil_Display';
import ProfilForm from '../components/ProfilForm';
import ProfilScreen from '../screens/ProfilScreen';
import JamForm from '../screens/JamFormScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';


// Page de connexion
class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };

  render() {
    return (
      <View style={styles.container}>
        <Login/>
        <Button title="Connexion" onPress={this._signInAsync} />
        <Text style={styles.signupText}> Pas encore de compte ? </Text>
        <Button title="S'inscrire" onPress={() => this.props.navigation.navigate('Signup')}/>
        <Text style={styles.signupText}> Mot de passe oublié ? </Text>
        <Button title="Cliquez ici" onPress={() => this.props.navigation.navigate('ForgotPassword')}/>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

//Page de création de compte
class Signup extends React.Component {
  static navigationOptions = {
    title: 'Inscription',
  };

  render() {
    return (
      <View style={styles.container}>
        <SignupScreen/>
        <Button
          title="Créer un compte"
          onPress={this._signInAsync}
        />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

}

//page mdp oublié
class ForgotPassword extends React.Component {
  static navigationOptions = {
    title: 'Mot de passe oublié',
  };
  render() {
    return (
      <View style={styles.container}>
        <ForgotPasswordScreen/>
        <Button title="Envoyer" onPress={() => this.props.navigation.navigate('PostForgotPassword')}/>
      </View>
    );
  }
}

//page post mdp oublié
class PostForgotPassword extends React.Component {
  static navigationOptions = {
    title: 'Mot de passe oublié',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Votre mot de passe a été réinitialisé. Un mail contenant votre mot de passe temporaire vous a été envoyé :)</Text>
        <Button title="Revenir à l'accueil" onPress={() => this.props.navigation.navigate('SignIn')}/>
      </View>
    );
  }
}

//Page de déconnexion
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


// Page de loading
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
const AuthStack = createStackNavigator({ SignIn: SignIn, Signup:Signup, ForgotPassword:ForgotPassword, PostForgotPassword:PostForgotPassword });

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerwidth: WIDTH*0.43,
}

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
    signupText : {
    color : '#000',
    fontSize : 12
  },  
  logoText : {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  signupButton : {
    color : '#000',
    fontSize : 12,
    fontWeight : '600'
  }
});

