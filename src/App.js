import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from '../src/Routes/routes';
import Map from './Containers/Map/map';

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
