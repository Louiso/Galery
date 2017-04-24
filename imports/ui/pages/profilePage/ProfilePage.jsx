import React , { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileSteam from '/imports/ui/components/profiles/profileSteam/ProfileSteam.jsx';

export default class ProfilePage extends Component{
  getPlayer(){
    return {
      _id:'1',
      username:'Luis Alfredo',
      position:'support',
      heroe:'/heroes/jakiro_sb.png',
      srcImg:'/imgProfiles/louiso.jpg',
      wins:0,
      heroesMostRecently:'jakiro',
      commendations:'report x 1000',
    }
  }
  renderProfile(){
    return <ProfileSteam player={this.getPlayer()}/>;
  }
  render(){
    return(
      <div>
        {this.renderProfile()}
      </div>
    );
  }
}

ProfilePage.propTypes={
  player:PropTypes.object,
}
