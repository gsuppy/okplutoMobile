import React, { Component, PropTypes as T } from 'react';
import { View, ScrollView, Text, Image, Linking } from 'react-native';
import { getEvents } from '../services/eventServices.js';
import EventList from './eventList.js';
import Banner from './banner'

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

// Live update events displayed on page based on user search input
// TODO: need a debounce function so this doesn't fire contantly
// as user types

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
      <ScrollView>
        <Banner display={'Local Events'} />
        <View>

        </View>
        <View style={{marginBottom: 20}}>
          <EventList events={this.state.displayedEvents} userInfo={this.props.userInfo} />
        </View>

      </ScrollView>
    )
  }
}

  //     line 45
  //  line 42             <AutoComplete style={{marginLeft: '75%'}}
            //      floatingLabelText="Search Events"
            //      filter={AutoComplete.fuzzyFilter}
            //      dataSource={this.state.searchSource}
            //      maxSearchResults={5}
            //      searchText={this.state.search}
            //      onUpdateInput={this.handleChange}
            //      onNewRequest={this.handleChange}
            // />
  //      line 39  <NavLoggedIn auth={this.props.auth} toggleDrawer={this.props.toggleDrawer} />
  //       line 57 <FooterLoggedIn />

module.exports = Events;