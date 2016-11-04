'use strict';
import React, {Component, PropTypes as T } from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';
// import AuthService from '../utils/AuthService.jsx';
// import Navigation from './nav.jsx';
// import Auth0Lock from '../../node_modules/auth0-lock';
// import Footer from './footer.jsx';
const House = require('../assets/house.png');
const Connect = require('../assets/connect.png');
const MeetUp = require('../assets/meetUp.png');
const Daisy = require('../assets/daisy.png');
const Kat = require('../assets/kat.png');
const Jarrett = require('../assets/jarrett.png');
const Ivey = require('../assets/ivey.png');

// Stateless Components

// component that will show clickable site features for visitors
class IconItem extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <View className='col-md-4'>
        <Image source={this.props.url} onPress={()=>Linking.openURL('http://www.google.com')} />
        <Text>{this.props.display}</Text>
        <Text>{this.props.info}</Text>
      </View>
    );
  };
};

// component that displays the development team and links to their github page
class TeamIcon extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <View className='col-md-3' >
        <Image source={this.props.url} />
        <Text>{this.props.display}</Text>
      </View>
    );
  };
};

// component for the home page
//line 59 <Navigation auth={this.props.auth}/>
class Home extends Component {

  render () {
    return (
      <ScrollView>

        <View>
          <View>
            <Text>Ok Pluto</Text>
            <Text>Online playground</Text>
            <Text>for your best friend</Text>
          </View>
        </View>

        <View className='row section-heading'>
          <Text>Get to know fellow dog owners in your area</Text>
        </View>

        <View>
          <View>
            <IconItem
              url={Connect}
              display={'CONNECT'}
              info={'OkPluto instantly puts you in touch with other dog lovers from around the world'}
              // onTouchTap={this.props.auth.signup.bind(this)}
            />
            <IconItem
              url={MeetUp}
              display={'MEET UP'}
              info={'We make it easy for you to set up walks and dog park meet ups with other local dog owners'}
              // onTouchTap={this.props.auth.signup.bind(this)}
            />
            <IconItem
              url={House}
              display={'ADOPT A DOG'}
              info={'Don\'t have a dog? No worries! Adopt your new best friend at a shelter near you!'}
              link={'https://www.petfinder.com/animal-shelters-and-rescues/search'}
            />
          </View>
        </View>

        <View className='row section-heading alt'>
          <Text>Our Development Team</Text>
        </View>

        <View>
          <View>
            <TeamIcon
              url={Daisy}
              display={'Daisy Good'}
              link={'https://www.linkedin.com/in/daisy-good-49a2a46a'}
            />
            <TeamIcon
              url={Kat}
              display={'Kat Gurdak'}
              link={'https://www.linkedin.com/in/katgurdak'}
            />
            <TeamIcon
              url={Jarrett}
              display={'Jarrett Kennedy'}
              link={'https://www.linkedin.com/in/jarrettk'}
            />
            <TeamIcon
              url={Ivey}
              display={'Ivey Topaz'}
              link={'https://www.linkedin.com/in/ivey-topaz-765a85124'}
            />
          </View>
        </View>

      </ScrollView>
    );
  };
};
  //line 123 <Footer />
// for debugging/developing
// Home.propTypes = {
//   location: T.object,
//   auth: T.instanceOf(AuthService)
// };

module.exports = Home;
