import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Containers/Login/login';
import Profile from '../Containers/Layout/player-Layout';
import Trophies from "../Components/Trophies/trophies";
import Mytrophies from "../Components/myTrophies/myTrophies";


const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/trophies/:id" component={Mytrophies} />
    <Route path="/" component={Login} />
    {/* <Route path="/trophies" component={Trophies} /> */}
  </Switch>
);
export default routes;
