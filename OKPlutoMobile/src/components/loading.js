"use strict"

import React from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import CircularProgress from 'material-ui/CircularProgress';
// import Paper from 'material-ui/Paper';
// import MyTheme from '../theme/theme.js';

// const style = {
  // marginLeft: 45%,
  // marginTop: 40,
//   alignContent: 'center'
// }

// const paperStyle = {
//   height: 45,
//   width: 140,
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: `2em`
// };

  // <MuiThemeProvider muiTheme={getMuiTheme(MyTheme)}>

  //       <Paper style={paperStyle} zDepth={2}>Fetching...</Paper>

  //       <CircularProgress size={120} thickness={5}/>

  // </MuiThemeProvider>


const Loading = () => (
  <View >

    <View>
    </View>

    <View>
      <Text>Loading...</Text>
    </View>

  </View>
)

module.exports = Loading;