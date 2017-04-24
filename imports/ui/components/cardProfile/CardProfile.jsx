import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default class CardProfile extends Component{
  //Creo que es innescesario pasar todo el jugador , ps seria suficiente con pasar
  //la id del jugador y obtener la data del player
  // handleOnClick(){
  
    // FlowRouter.go(`/Profile/${this.props.player.username}`,this.props.player);
  // }
  render(){
    return(
      <div className="card-profile">
        <figure className="snip1344">
          <img src={this.props.player.heroe} alt="profile-sample1" className="background"/>
          {/*Investigar como redireccionar con una funcion similar a FlowRoute.go*/}
          <Link to='/profile'><img src={this.props.player.srcImg} alt="profile-sample1" className="profile"/></Link>
          <figcaption>
            <h3>{this.props.player.username}-{this.props.player.clan || ''}<span>{this.props.player.position}</span></h3>
            <div className="icons">
              <a href="#"><i className="ion-social-facebook-outline"></i></a>
              <a href="#"><i className="ion-social-twitter-outline"></i></a>
              <a href="#"><i className="ion-social-github-outline"></i></a></div>
          </figcaption>
        </figure>
      </div>
    );
  }
}

CardProfile.propTypes={
  player:PropTypes.object,
}
