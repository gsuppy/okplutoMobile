import React, { Component, PropTypes as T } from 'react';
import { View, ScrollView, Text, Image, Linking } from 'react-native';
import { getEvents } from '../services/eventServices.js';
import EventList from './eventList.js';
import Banner from './banner';
import AutoComplete from 'react-native-autocomplete-input';
import Footer from './footer';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      search: '',
      displayedEvents: [],
      searchSource: []
    };
    this.handleChange = this.handleChange.bind(this)
  }


//initial get request for the events
  componentDidMount() {
    var self = this;
    getEvents()
    .then( (events) => {
      // Tracker to match distance returned from Google API to correct event in the database
      var eventDests = [];
      var tracker = 0;
      events.events.forEach(event => {
        if(event.lat && event.lng) {
          event.tracker = tracker;
          tracker++;
          eventDests.push({lat: event.lat, lng: event.lng})
        }
      })

      let sortedEvents = events.events;

      //Set events into state after getting distance
      self.setState({events: sortedEvents});
      self.setState({displayedEvents: sortedEvents});

      //Set Searchable options for autocomplete search
      var searchArray = [];
      events.events.forEach(event => {
        searchArray.push(event.eventname, event.loc)
      })
      self.setState({searchSource: searchArray})

      console.log(this.state.events);
      })
    }

    //navigation path for our footer
    _navigate(path) {
      this.props.navigator.push({
        name: path,
      });
    }

// Live update events displayed on page based on user search input
// TODO: need a debounce function so this doesn't fire contantly
// as user types

// line 89      <EventList events={this.state.displayedEvents} userInfo={this.props.userInfo} />

handleChange(text, userNames) {
    let displayedEvents = this.state.events.filter(event => {
      if(event.eventname && event.loc) {
        for (let key in event) {
          if (event[key] === undefined) {
            event[key] = '';
          }
        }
        let re = new RegExp(text, "gi")
        return event.eventname.match(re) || event.loc.match(re)
      }
    });
    this.setState({displayedEvents: displayedEvents})
  }

render () {
    return (
      <View style={{flex:1}}>
      <ScrollView>
          <Banner display={'Local Events'} />
          <View>
            <AutoComplete
              defaultValue="Search Events"
              data={this.state.searchSource}
              onChangeText={this.handleChange}
              onRender={this.handleChange}
              />
            </View>
            <View style={{marginBottom: 20}}>
          </View>
      </ScrollView>
      <Footer navigate={this._navigate.bind(this)}/>
      </View>
    )
  }
}



module.exports = Events;