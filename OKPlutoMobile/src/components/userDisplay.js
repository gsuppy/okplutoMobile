"use strict";

import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
// import DialogButton from './dialogButton.js';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Avatar from 'material-ui/Avatar';

class UserDisplay extends Component {

  render () {
    return (
      <View>
        <Card>
          <CardMedia>
            <Image source={this.props.user.picLink || this.props.user.profilepic} alt="Pic"/>
          </CardMedia>

          <CardHeader
            title={this.props.user.dogname}
            subtitle={'From: ' + this.props.user.loc}
            avatar={
              <Avatar
                src={this.props.user.profilepic}
                style={{float: 'right', marginTop: -35, marginLeft:20}}>
              </Avatar>
            }
            actAsExpander={true}
            showExpandableButton={true}
          />

          <CardText expandable={true}>
            <strong>Owner:</strong> {this.props.user.firstname}<br />
            <strong>Age: </strong>{this.props.user.dogAge}<br />
            <strong>Breed: </strong>{this.props.user.dogBreed}<br />
          </CardText>

          <CardActions>
            <DialogButton
              userId={this.props.user._id}
              lat={this.props.user.lat}
              lng={this.props.user.lng}
              type={this.props.type}
              userInfo={this.props.userInfo}
              resetUserInfo={this.props.resetUserInfo}
              toggleDrawer={this.props.toggleDrawer}
            />
          </CardActions>
        </Card>
      </View>
    )
  }

}

export default UserDisplay;
