/*
  This file contains the footer users see after they log in! Using hashHistory, it redirects users to the corresponding description given for the page (Users, Events, or Profile). Note that there's a different footer component to be shown on the home page within footer.js (right below this one).
*/

"use strict";

import React, { Component } from 'react';
import { View, ListView, Text, TouchableHighlight, Navigator, NativeModules } from 'react-native';
import { COLOR, ThemeProvider } from '../react-native-material-ui';

const FooterLoggedIn = (props) => (
  <View>
    <Text>Ok Pluto</Text>
    <View>
      <ListView>
        <TouchableHighlight onClick={() => this.props.navigator.push({name: 'UsersPage'})}>
          <Text>Users</Text>
        </TouchableHighlight>
        <TouchableHighlight onClick={() => this.props.navigator.push({name: 'Events'})}>
          <Text>Events</Text>
        </TouchableHighlight>
        <TouchableHighlight onClick={() => this.props.navigator.push({name: 'Profile'})}>
          <Text>Profile</Text>
        </TouchableHighlight>
      </ListView>
    </View>
  </View>
)

module.exports = FooterLoggedIn;