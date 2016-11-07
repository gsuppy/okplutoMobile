"use strict";

import React, { Component } from 'react';
import UserDisplay from './userDisplay.js';
import Loading from './loading.js';

// Row component for each rows
const Row = (props) => (
  <View className="row">
    {
      props.row.map((user) => (
        <View>
          <UserDisplay user={user} userInfo={props.userInfo} resetUserInfo={props.resetUserInfo} type='user' />
        </View>
      ))
    }
  </View>
)

class UserList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.users.length) {

      var users = this.props.users
      var rows = [];
      var row = [];
      // Wrap 4 users in one row
      for (var i = 0; i < users.length; i++) {
        if (i % 4 === 0 && row.length > 0) {
          rows.push(row);
          row = [];
        }
        row.push(users[i]);
        if (i === users.length - 1 && row.length > 0) {
          rows.push(row);
        }
      }

      return (
        <View >
          {
            rows.map(row => (
              <Row row={row} userInfo={this.props.userInfo} resetUserInfo={this.props.resetUserInfo} />
            ))
          }
        </View>
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}



export default UserList;
