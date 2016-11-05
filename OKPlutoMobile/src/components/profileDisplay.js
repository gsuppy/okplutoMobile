'use strict';
import React, {Component} from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';
import ProfileEditDialog from './profileEditDialog'


// <Image source={this.props.userInfo.profilepic} />
// {this.props.userInfo.firstname} {this.props.userInfo.lastname}
// {this.props.userInfo.loc}
// <Image source={this.props.userInfo.picLink} alt="Pic"/>
// {this.props.userInfo.dogname}
// {this.props.userInfo.dogBreed}
// {this.props.userInfo.dogAge}
// <ProfileEditDialog userInfo={this.props.userInfo} resetUserInfo={this.props.resetUserInfo} />
class ProfileDisplay extends Component {
  constructor(props) {
  super(props);
  }


  render(){
    return (
      <ScrollView>

        <View>
          <Text> 
            This is where the profilepic will go 
          </Text>
        </View>

        <View>

          <View>
            <Text> 
              Your Info 
            </Text>
          </View>

          <Text>Name: Have to get user name from props</Text>

          <Text>Location: Have to get location from props</Text>
  
          
          <View>
            <Text>
              This will be a pic of You
            </Text>
          </View> 
          
      

          <View>
            <Text> 
              Your Pup's Info
            </Text>
          </View>

            <Text>Name: </Text>
            <Text>Breed: </Text>
            <Text>Age: </Text>

          <View>
            <ProfileEditDialog />
          </View>

        </View>

      </ScrollView>
    )
  }   
}


module.exports = ProfileDisplay;