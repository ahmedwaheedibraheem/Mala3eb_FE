import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
// import PitchLayout from './Containers/Layout/pitch-Layout';
import Routes from '../src/Routes/routes';
import * as classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <>
        <div className={classes.fontFamily} >
          <BrowserRouter>
            {Routes}
          </BrowserRouter>
        </div>
      </>
    );
  };
};

export default App;