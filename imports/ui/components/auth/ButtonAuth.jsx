import React , { Component } from 'react';

import { Link } from 'react-router-dom';

export default class ButtonAuth extends Component{
  constructor(props){
    super(props);
    this.state={
      user:true,
      login:false,
      register:false,
      log_out:false,
    }
  }
  render(){
    //Si un usuario entra
    if(this.state.user){
      return(
        <div className='button-auth'>
          <Link to='/'><button className='button-login'>Nombre</button></Link>
          <Link to='/'><button className='button-sing-up'>Log out</button></Link>
        </div>
      );
    }else{//Si no hay usuario
      return(
        <div className='button-auth'>
          <Link to='/'><button className='button-login'>Log in</button></Link>
          <Link to='/'><button className='button-sing-up'>Sing up</button></Link>
        </div>
      );
    }
  }
}
