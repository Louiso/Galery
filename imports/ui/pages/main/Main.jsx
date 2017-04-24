import React , { Component } from 'react';

import { Link } from 'react-router-dom';

import Login from '/imports/ui/components/auth/ButtonAuth.jsx';
import Aside from '/imports/ui/components/aside/Aside.jsx';

//Contenidos
import Welcome2Doby from '/imports/ui/containers/welcome2Doby/Welcome2Doby.jsx';

export default class Main extends Component{
  render(){
    return(
      <div className = 'main'>
        <nav>
          <ul>
            <li><Link to='/'>Comunidad</Link></li>
            <li><Link to = '/'>Acerca de</Link></li>
            <li><Link to = '/'>Soporte</Link></li>
          </ul>
          <Login/>
        </nav>
        <Aside/>
        <div className="container">
          <Welcome2Doby/>
          {/* <Route path="/" component={Welcome2Doby}/> */}
          {/* <Route path="/Comunidad" component={Comunidad}/>
          <Route path="/About" component={About}/>
          <Route path="/Soporte" component={Soporte}/> */}
        </div>

      </div>
    );
  }
}
