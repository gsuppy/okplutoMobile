"use strict";

import React from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';

const Banner = (props) => (
  <View style={styles.banner}>
    <Text style={styles.text}>{props.display}</Text>
  </View>
)

  const styles = {
    banner:{
      paddingTop: 15,
      height: 60,
      backgroundColor: '#145199',
      justifyContent: 'center',
      alignItems: 'center' 
    },
    text:{
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white'
    }
  }

module.exports = Banner;