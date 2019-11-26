import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../ResuableComponents/Header/Header';
import ExplorePage from '../Pages/ExplorePage/ExplorePage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';

import '../styles/tailwind.css';
import '../styles/reset.scss';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={props => <Header {...props} /> }/>

      <Route exact path='/explore' comonent={props => <ExplorePage {...props} /> }/>

      <Route exact path='/:username' comonent={props => <ProfilePage {...props} /> }/>

    </div>
  );
}

export default App;
