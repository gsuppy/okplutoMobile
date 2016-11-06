'use strict';
import React, {Component} from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';
import ProfileEditDialog from './profileEditDialog'


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
          <Text> Profile Picture </Text>
          <Image 
          style={{width:50,height:50}}
          source={{uri:this.props.profile.picture}} />
        </View>

        <View>

          <View>
            <Text> 
              Your Info 
            </Text>
          </View>


          <Text>Name:{this.props.profile.name}</Text>
          <Text>Location: Have to get location from profile Creation props - could hard code loactions if we want to</Text>
  
          
          <View>
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