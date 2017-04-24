import React , { Component } from 'react';
import PropTypes from 'prop-types';


export default class SideLeft extends Component{
  render(){
    return(
      <div className='side-left'>
        <div className='row'>
          <div className='col-12'>
              {/* <img src='http://www.gifss.es/fuego/llamas/llama-incendio.gif' className='background'/> */}
              <div className='foto'>
                <img src={this.props.player.srcImg} className='profile'/>
                <h3>{this.props.player.username}<br/><span>{this.props.player.position}</span></h3>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='data'>
              <ul>
                <li><a>Roll</a></li>
                <li><a>Direccion</a></li>
                <li><a>Correo</a></li>
                <li><a>Numero</a></li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
SideLeft.propTypes={
  player:PropTypes.object,
}
