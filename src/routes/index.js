import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import MainPage from '~/pages/MainPage';
import Backend from '~/pages/Backend';
import Frontend from '~/pages/Frontend';
import About from '~/pages/About';
import VuttrMainPage from '~/pages/VuttrMainPage';
import VuttrSignIn from '~/pages/VuttrSignIn';
import VuttrSignUp from '~/pages/VuttrSignUp';
import VuttrUserProfile from '~/pages/VuttrUserProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/backend" component={Backend} />
      <Route path="/frontend" component={Frontend} />
      <Route path="/about" component={About} />
      <Route path="/vuttrsignin" component={VuttrSignIn} isSign />
      <Route path="/vuttrsignup" component={VuttrSignUp} isSign />

      <Route path="/vuttrmainpage" isPrivate component={VuttrMainPage} />
      <Route path="/vuttruserprofile" isPrivate component={VuttrUserProfile} />
    </Switch>
  );
}
