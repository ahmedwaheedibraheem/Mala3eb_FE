import React, { Component } from 'react';
import Login from './Containers/Login/login';
import Register from './Containers/Register/register';
import Playout from './Containers/Layout/player-Layout';
import login from './Containers/Login/login';

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Playout />
      </>
    );
  };
};

export default App;
