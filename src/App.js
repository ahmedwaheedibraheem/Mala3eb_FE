import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import * as classes from './App.module.css';
import Routes from '../src/Routes/routes';

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