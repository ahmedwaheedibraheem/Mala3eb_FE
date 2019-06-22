import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Containers/Login/login';
import Profile from '../Containers/Layout/player-Layout';
import PitchProfile from '../Containers/Layout/pitch-Layout';
import Mytrophies from "../Components/myTrophies/myTrophies";
import MainPage from '../Containers/Mainpage/main-Page';
import Register from '../Containers/Register/register';
import CreatePlayer from '../Containers/Create-player/create-player';
import CreatePitch from '../Containers/Create-Pitch/createPitch';
import CardList from '../Components/Card-Search-List/cardList';
import PlayerPitchCreation from "../Components/Player-PitchCreation/Player-PitchCreation"
import Contactus from "../Containers/Conatctus/contactus";
import Aboutus from "../Containers/Aboutus/aboutus";
import Evaluation from "../Containers/Evaluation/evaluation";
import CollectionLayout from "../Containers/Layout/collection_layout"
import CreateCollection from "../Containers/Create-collection/create-collection";
import EntitiesPage from '../Containers/Entities-page/entities-page';
import NotFound from '../Components/Not-Found/notFound';
import PitchList from '../Containers/Pitches-Listing/pitchlist';


const routes = (
  <Switch>
    <Route path="/main" component={MainPage} />
    <Route path="/login" component={Login} />
    <Route path="/pitch/:pitchId" component={PitchProfile} />
    <Route path="/register" component={Register} />
    <Route path="/profile/:playerId" component={Profile} />
    <Route path="/trophies/:id" component={Mytrophies} />
    <Route path="/createplayer" component={CreatePlayer} />
    <Route path="/createpitch" component={CreatePitch} />
    <Route path="/createcollection" component={CreateCollection} />
    <Route path="/aboutus" component={Aboutus} />
    <Route path="/contactus" component={Contactus} />
    <Route path="/searchresult" component={CardList} />
    <Route path="/collection" component={CollectionLayout} />
    <Route path="/creation" component={PlayerPitchCreation} />
    <Route path="/evaluation/:playerId" component={Evaluation} />
    <Route path="/entitiespage" component={EntitiesPage} />
    <Route path="/pitchlist" component={PitchList} />
    <Route path="/notfound" component={NotFound} />
    <Route path="/" component={MainPage} />
  </Switch>
);
export default routes;
