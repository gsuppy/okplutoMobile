/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import AuthService from './utils/AuthService.jsx';
// import $ from 'jquery';
import Home from './components/home.jsx';
// import { auth0 } from '../config/auth0.js';
// import UsersPage from './components/usersPage.jsx'
// import Container from './components/container.jsx'
// import Profile from './components/profile.jsx'
// import Events from './components/events.jsx'
// import ProfileCreation from './components/profileCreation.jsx'
// import Loading from './components/loading.jsx'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import InfoDrawer from './components/infoDrawer.jsx'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class OKPlutoMobile extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Team Hermes for the Win!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Transforming OKPluto!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Let's do this!
  //       </Text>
  //     </View>
  //   );
  // }
  render() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OKPlutoMobile', () => OKPlutoMobile);
