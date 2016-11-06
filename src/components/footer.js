/*
  This file contains the homepage footer! A few links to our github page if users are interested. Pretty simple. Note that there's a different footer component to be shown after users log in within footer-loggedIn.js (although you've probably already seen it).
*/

"use strict";

import React, { Component, Image, TouchableOpacity } from 'react';
import { View, ListView, Text, TouchableHighlight, Navigator, NativeModules } from 'react-native';
import uiTheme from '../theme/theme.js';
import NavigationBar from 'react-native-navbar';



 /* <View>
    <Text>Ok Pluto</Text>
    <View>
      <ListView>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL("https://github.com/okpluto/okpluto/blob/master/_PRESS-RELEASE.md")}>
          <Text>Why choose OK Pluto</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL("https://github.com/okpluto/okpluto/blob/master/README.md")}>
          <Text>About Us</Text>
        </TouchableHighlight>
      </ListView>
    </View>
  </View> */

    /* <ActionButton
    /> */

const backArrow = require('../assets/navbar/backArrow.png');


const rightButtonConfig = {
  title: 'Next',
  handler: function onNext() {
    alert('Next!');
  }
};

const leftButtonConfig = {
  title: 'Back',
  handler: function onBack() {
    alert('Back!');
  }
};

const titleConfig = {
  title: 'Home'
};

// <Image source={{backArrow}}/>

const Footer = (props) => (
    <View>
      <NavigationBar
        title={titleConfig}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig}
      />
    </View>
)

module.exports = Footer;