"use strict";

import React, { Component } from 'react';
import { View } from 'react-native';
import UserDisplay from './userDisplay.js';
import Loading from './loading.js';

// Row component for each rows
// const Row = (props) => (
//   <View className="row">
//     {
//       props.row.map((user) => (
//         <View>
//           <UserDisplay key={user} user={user} userInfo={props.userInfo} resetUserInfo={props.resetUserInfo} type='user' />
//         </View>
//       ))
//     }
//   </View>
// )

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('users on userlist', this.props.users)
      return (
        <View>
        {
          this.props.users.map(user => (
              <UserDisplay user={user} type='user' />
            ))
        }
        </View>
        )
  }
}



export default UserList;
