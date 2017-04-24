import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Routes } from '/imports/startup/routes/Routes.jsx';


Meteor.startup(()=>{
  render(<Routes/>,document.getElementById('render-target'));
});

// import { mount } from 'react-mounter';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { ApplicationLayout } from '/imports/ui/layouts/application/ApplicationLayout.jsx';
// import WelcomePage from '/imports/ui/pages/welcome/WelcomePage.jsx';
// import ProfilePage from '/imports/ui/pages/profilePage/ProfilePage.jsx';
//
// FlowRouter.route('/',{
//   action(){
//     mount(ApplicationLayout,{
//       content:(<WelcomePage/>),
//     });
//   }
// });
// FlowRouter.route('/Profile/:id',{
//   action(params){
//     mount(ApplicationLayout,{
//       content:(<ProfilePage player={params.player}/>),
//     });
//   }
// });
