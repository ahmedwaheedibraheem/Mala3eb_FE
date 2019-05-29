import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Routes from '../src/Routes/routes';
import Login from './Containers/Login/login';
import Register from './Containers/Register/register';
import Playout from './Containers/Layout/player-Layout';
import login from './Containers/Login/login';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
      </>
    );
  };
};

export default App;
