/*
  This file contains the component for the DialogButton! Used within userDisplay.js
*/

import React, {Component} from 'react';
import {View} from 'react-native'
import MeetupDialog from './meetupDialog.js'

class DialogButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MeetupDialog userId={this.props.userId} lat={this.props.lat} lng={this.props.lng} userInfo={this.props.userInfo} resetUserInfo={this.props.resetUserInfo}
      />
    )
  }
}

export default DialogButton;