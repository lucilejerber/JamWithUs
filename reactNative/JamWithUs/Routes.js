import React , { Component } from 'react' ;

import { Router, Stack, Scene } from 'react-native-router-flux' ;

import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';

export default class Routes extends Component<{}> {
	render(){
		return(
			<Router>
		    	<Stack key="root">
		      		<Scene key="login" component={Login} title="Login" initial={true}/>
		      		<Scene key="register" component={Signup} title="Register"/>
		    	</Stack>
		  </Router>
		)
	}
};