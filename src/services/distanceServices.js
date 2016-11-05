"use strict";
import React from 'react-native';

// fetch  call to get distance btwn two locations
const getDistance = function(origin, destination) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/distance"), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      origin: JSON.stringify(origin),
      destinations: JSON.stringify(destination)
    }
  }
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: '/api/distance',
//       type: 'POST',
//       data: {origin: JSON.stringify(origin), destinations: JSON.stringify(destination)},
//       success: resolve,
//       error: reject
//     });
//   });
// }

module.exports = {
  getDistance: getDistance
}