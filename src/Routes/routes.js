import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Containers/Login/login';
import Profile from '../Containers/Layout/player-Layout';
import pitchProfile from '../Containers/Layout/pitch-Layout';
import Mytrophies from "../Components/myTrophies/myTrophies";
import MainPage from '../Containers/Mainpage/main-Page';
import Register from '../Containers/Register/register';

const routes = (
  <Switch>
    <Route path="/main" component={MainPage} />
    <Route path="/login" component={Login} />
    <Route path="/pitch/:pitchId" component={pitchProfile} />
    <Route path="/register" component={Register} />
    <Route path="/profile/:playerId" component={Profile} />
    <Route path="/trophies/:id" component={Mytrophies} />
    <Route path="/" component={MainPage} />
    {/* <Route path="/trophies" component={Trophies} /> */}
  </Switch>
);
export default routes;
