"use strict";
import React from 'react-native';

// Get all events from db
const getEvents = function () {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/events")
    .then ( response => response.json());
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/events',
//       type: 'GET',
//       success: resolve,
//       error: reject
//     });
//   });
// };

// Save new event to db
const saveEvent = function (data) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/events"), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      data: JSON.stringify(data)
    }
  }
};
//   data.creator = data.creator || localStorage.getItem('mongoUserId');
//   console.log('about to save ', data)
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/events',
//       type: 'POST',
//       data: {data: JSON.stringify(data)},
//       success: resolve,
//       error: reject
//     });
//   });
// };

//Add new attendee to db
const addPerson = function(eventId, userId) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/events/add"), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      eventId: eventId,
      userId: userId
    }
  }
};
//   userId = userId || localStorage.getItem('mongoUserId')
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/events/add',
//       type: 'PUT',
//       data: {eventId: eventId, userId: userId},
//       success: resolve,
//       error: reject
//     })
//   })
// };

// Get all events the user is attending or created
const searchEvents = function(dbId) {
  fetch(`https://tranquil-tundra-43211.herokuapp.com/api/events?dbId=${dbId}`)
    .then( response => response.json())
};
//   dbId = dbId || localStorage.getItem('mongoUserId');
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: `api/events?dbId=${dbId}`,
//       type: 'GET',
//       success: resolve,
//       error: reject
//     });
//   });
// }

// Remove user from an event
const removePerson = function(eventId, userId) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/events/remove"), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      eventId: eventId,
      userId: userId
    }
  }
};
//   userId = userId || localStorage.getItem('mongoUserId')
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/events/remove',
//       type: 'PUT',
//       data: {eventId: eventId, userId: userId},
//       success: resolve,
//       error: reject
//     })
//   })
// };

// Delete an event from db
const deleteEvent = function(eventId) {
  fetch("https://tranquil-tundra-43211.herokuapp.com/api/events"), {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      eventId: eventId
    }
  }
};
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: 'api/events',
//       type: 'DELETE',
//       data: {eventId: eventId},
//       success: resolve,
//       error: reject
//     })
//   })
// }

module.exports = {
  getEvents: getEvents,
  saveEvent: saveEvent,
  addPerson: addPerson,
  searchEvents: searchEvents,
  removePerson: removePerson,
  deleteEvent: deleteEvent
};