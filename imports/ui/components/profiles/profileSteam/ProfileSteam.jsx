import React , { Component } from 'react';
import PropTypes from 'prop-types';

import SideLeft from './sideLeft/SideLeft.jsx';
import SectionProfile from './sectionProfile/SectionProfile.jsx';

export default class ProfileSteam extends Component{
  render(){
    return(
      <div className='profile-steam'>
        <div className='row'>
          <div className='col-3'>
            <SideLeft player={this.props.player}/>
          </div>
          <div className='col-9'>
            <SectionProfile player={this.props.player}/>
          </div>
        </div>
      </div>
    );
  }
}
ProfileSteam.propTypes={
  player:PropTypes.object,
}
