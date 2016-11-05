'use strict';
import React, {Component, PropTypes as T } from 'react';
import {View, ScrollView, Text, Image, Linking, TouchableHighlight} from 'react-native';
// import AuthService from '../utils/AuthService.jsx';
// import Navigation from './nav.jsx';
// import Auth0Lock from '../../node_modules/auth0-lock';
// import Footer from './footer.jsx';
const House = require('../assets/house.png');
const Connect = require('../assets/connect.png');
const MeetUp = require('../assets/meetUp.png');
const Erica = require('../assets/erica.png');
const Lucas = require('../assets/lucas.png');
const Philip = require('../assets/philip.png');
const Kevin = require('../assets/kevin.png');

// Stateless Components

// component that will show clickable site features for visitors
class IconItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className='col-md-4'>
        <Image source={this.props.url} />
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
  }

  _onPressButton(url) {
    console.log(url);
    Linking.openURL(url).catch(err => console.log('an error occurred', err));
  }

// <TouchableHightlight onPress={this._onPressButton}>
//  </TouchableHightlight>
 render() {
    return (

      <View>
        <TouchableHighlight onPress={() => this._onPressButton(this.props.link)}>

        <Image style={styles.teamPhotos} source={this.props.url}/>

        </TouchableHighlight>
        <Text>{this.props.display}</Text>
      </View>

    );
  };
};

// component for the home page
//line 59 <Navigation auth={this.props.auth}/>
class Home extends Component {
  constructor(props){
    super(props);
  }

  _navigate() {
    this.props.navigator.push({
      name: 'Events',
    })
  }

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

        <TouchableHighlight underlayColor='darkgreen' onPress={ () => this._navigate() }>
          <Text>Check out Events!</Text>
        </TouchableHighlight>

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
              url={Erica}
              display={'Erica Fanelle'}
              link={'https://www.linkedin.com/in/erica-fanelle'}
            />
            <TeamIcon
              url={Lucas}
              display={'Lucas Hawes'}
              link={'https://www.linkedin.com/in/lucashawes'}
            />
            <TeamIcon
              url={Philip}
              display={'Philip Dorin'}
              link={'https://www.linkedin.com/in/philip-dorin-0705a3b3'}
            />
            <TeamIcon
              url={Kevin}
              display={'Kevin Kim'}
              link={'https://www.linkedin.com/in/kevin-ji-kim'}
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

const styles= {
  teamPhotos: {
    paddingTop: 40,
    paddingBottom: 40,
    height: 100,
    width:100
  }
}



module.exports = Home;
