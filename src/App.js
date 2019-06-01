import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import PitchLayout from './Containers/Layout/pitch-Layout';
import Routes from '../src/Routes/routes';
import Login from './Containers/Login/login';
import Comment from './Containers/comment/comment';
import CommentList from './Containers/Comment-List/comment-list';

// import Register from './Containers/Register/register';

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
