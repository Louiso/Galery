import React from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

import CardProfile from '/imports/ui/components/cardProfile/CardProfile.jsx';
import ProfileSteam from '/imports/ui/components/profiles/profileSteam/ProfileSteam.jsx';
import ProfileDota from '/imports/ui/components/profiles/profileDota/ProfileDota.jsx';
import ProfileLol from '/imports/ui/components/profiles/profileLol/ProfileLol.jsx';
import WelcomePage from '/imports/ui/pages/welcome/WelcomePage.jsx';
import ProfilePage from '/imports/ui/pages/profilePage/ProfilePage.jsx';

import Main from '/imports/ui/pages/main/Main.jsx';


export const Routes = ()=>(
  <Router>
    <div>
      <Route exact path='/' component={Main}/>
      <Route path='/profile' component={ProfilePage}/>
    </div>
  </Router>
)
