/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import AuthService from './utils/AuthService.jsx';
// import $ from 'jquery';

// import { auth0 } from '../config/auth0.js';
// import UsersPage from './components/usersPage.jsx'
// import Container from './components/container.jsx'
// import Profile from './components/profile.jsx'
// import Events from './components/events.jsx'
// import ProfileCreation from './components/profileCreation.jsx'
// import Loading from './components/loading.jsx'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import InfoDrawer from './components/infoDrawer.jsx'

import Home from './src/components/home';
import Profile from './src/components/profile';
import UsersPage from './src/components/usersPage';
import ProfileCreation from './src/components/profileCreation'

//Authentication with Auth0



// import UsersPage from './src/components/UsersPage';
// import UsersPage from './src/components/UsersPage';

import Events from './src/components/events';

//Lucas
var Auth0Lock = require('react-native-lock');
var authobj = require('./config/auth0');
var lock = new Auth0Lock(authobj);

//Lucas
const profileObj = {};
const tokenObj = {};
lock.show({}, (err, profile, token) => {
  if (err) {
    console.log(err);
    return;
  }
  // Authentication worked!
  profileObj = profile;
  tokenObj = token;
});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
// import Router from 'react-native-routing';

export default class OKPlutoMobile extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Home') {
      return <Home navigator={navigator} />

    } else if (name === 'Profile') {
      return <Profile navigator={navigator} profile={profileObj}/>
    } else if (name === 'Events') {
      return <Events navigator={navigator} {...passProps}/>
    } else if (name === 'ProfileCreation') {
      return <ProfileCreation navigator={navigator} />
    } else if (name === 'UsersPage') {
      return <UsersPage navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
      style={{backgroundColor: 'lightgreen'}}
      initialRoute={{name:'Home'}}
      renderScene={this.renderScene}
      />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('OKPlutoMobile', () => OKPlutoMobile);
