import React , { Component } from 'react';

export default class ProfileDota extends Component{
  render(){
    return(
      <div className='profile-dota'>
        <div className="col">
          <figure className="snip1344">
            <img src={this.props.player.srcImg} alt="profile-sample1" className="profile"/>
            <figcaption>
              <h3>{this.props.player.username}-{this.props.player.clan || ''}<span>{this.props.player.position}</span></h3>
              <div className="icons">
                <a href="#"><i className="ion-social-facebook-outline"></i></a>
                <a href="#"><i className="ion-social-twitter-outline"></i></a>
                <a href="#"><i className="ion-social-github-outline"></i></a>
              </div>
            </figcaption>
          </figure>
          <ul className='list-game'>
            <li><a href="">Dota2</a></li>
            <li><a href="">League of Legend</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
