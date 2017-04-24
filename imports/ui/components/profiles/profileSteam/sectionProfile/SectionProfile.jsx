import React , { Component } from 'react';
import PropTypes from 'prop-types';

export default class SectionProfile extends Component{
  render(){
    return(
      <div className='section-profile'>
        <div className='row'>
          <div className='col-12'>
            <div className="row">
              <div className="col-12">
                <div className='background'>
                  <img src='http://img02.deviantart.net/a88b/i/2013/126/8/7/moba_by_avield-d6215lu.png'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='cuadrado'>
                  <p>Bienvenido a mi Perfil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SectionProfile.propTypes={
  player:PropTypes.object,
}
