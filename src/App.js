import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
// import PitchLayout from './Containers/Layout/pitch-Layout';
import Routes from '../src/Routes/routes';
<<<<<<< HEAD
import TabsEntity from './Containers/List-Entities/listEntities';
=======
import * as classes from './App.module.css';
>>>>>>> 232faf156e98414477a765027693bf026e895e13

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