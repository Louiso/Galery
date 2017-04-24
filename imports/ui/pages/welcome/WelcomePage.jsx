import React , { Component } from 'react';

import CardProfile from '/imports/ui/components/cardProfile/CardProfile.jsx';

export default class WelcomePage extends Component{
  getPlayers(){
    return [{
      _id:'1',
      username:'Luis Alfredo',
      position:'support',
      heroe:'/heroes/jakiro_sb.png',
      srcImg:'/imgProfiles/louiso.jpg',
      wins:0,
      heroesMostRecently:'jakiro',
      commendations:'report x 1000',
    },{
      _id:'2',
      username:'AMG!!!',
      clan:'Scady!',
      position:'hard Tank',
      heroe:'/heroes/bristleback_sb.png',
      srcImg:'/imgProfiles/anthony.jpg',
      wins:10000,
      heroesMostRecently:'bristelBack',
      commendations:'Se hace el dota :\'v',
    }
  ];
  }
  renderProfiles(){
    return this.getPlayers().map((player)=>(
      <CardProfile key={player._id} player={player}/>
    ));
  }
  render(){
    return(
      <div>
        {this.renderProfiles()}
      </div>
    );
  }
}
