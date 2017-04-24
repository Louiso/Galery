import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Aside extends Component{
  render(){
    return(
      <aside>
        <ul>
          <li><Link to = '/'>Amigos</Link></li>
          <li><Link to = '/'>Novedades</Link></li>
          <li><Link to = '/'>Proximamente</Link></li>
          <li><Link to = '/'>Compotencias</Link></li>
          <li><Link to = '/'>Ranking</Link></li>
          <li><Link to = '/'>Juegos</Link>
            <ul>
              <li><Link to = '/'>Dota2</Link></li>
              <li><Link to = '/'>League of Legend</Link></li>
              <li><Link to = '/'>VainGlory</Link></li>
            </ul>
          </li>
        </ul>
      </aside>
    );
  }
}
