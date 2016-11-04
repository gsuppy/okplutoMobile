"use strict";
import React from 'react-native';

// fetch call to get latitude and longitude of an address
const getLatLng = function(address) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/geocode?loc=" + address)
    .then ( response => response.json());
};
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: 'api/geocode?loc=' + address,
  //     type: 'GET',
  //     success: resolve,
  //     error: reject
  //   });
  // });
// };

// Update user info
const updateDb = function(newProps) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/users"), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: newProps
  }
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/users',
//       type: 'PUT',
//       data: newProps,
//       success: resolve,
//       error: reject
//     });
//   });
// };

// Add latitude and longitude values then make ajax call to update user info
//NOT SURE HOW TO GET THIS TO WORK
// const updateUser = function(newProps) {
//   newProps.dbId = localStorage.getItem('mongoUserId');
//   return new Promise((resolve, reject) => {
//     if (newProps.loc) {
//       getLatLng(newProps.loc)
//         .then(function(results) {
//           newProps.lat = results.lat;
//           newProps.lng = results.lng;
//           updateDb(newProps)
//           .then(resolve)
//         });
//     } else {
//       updateDb(newProps)
//       .then(resolve)
//     }
//   })
// };

// Get all users from db
const getUsers = function() {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/users")
    .then ( response => response.json());
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/users',
//       type: 'GET',
//       success: resolve,
//       error: reject
//     });
//   });
// }

//POST to API to get mongoDB user info
const saveUser = function(idToken) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/signin"), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      id: idToken
    }
  }
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: '/signin',
//       type: 'POST',
//       data: {id: idToken},
//       success: resolve,
//       error: reject
//     });
//   });
// }

// Get current user's info from db
const findUser = function(dbId) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/users?dbId=${dbId})")
    .then( response => response.json())
  // dbId = dbId || localStorage.getItem('mongoUserId');
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: `api/users?dbId=${dbId}`,
  //     type: 'GET',
  //     success: resolve,
  //     error: reject
  //   });
  // });
}

// Delete a user
const deleteUser = function(dbId) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/users"), {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      dbId: dbId
    }
  }
};
  // dbId = dbId || localStorage.getItem('mongoUserId');
  // return new Promise((resolve, reject) => {
  //   $.ajax({
  //     url: 'api/users',
  //     type: 'DELETE',
  //     data: {dbId: dbId},
  //     success: resolve,
  //     error: reject
  //   })
  // })
// }

module.exports = {
  getLatLng: getLatLng,
  updateDb: updateDb,
  getUsers: getUsers,
  saveUser: saveUser,
  findUser: findUser,
  // updateUser: updateUser,
  deleteUser: deleteUser
}