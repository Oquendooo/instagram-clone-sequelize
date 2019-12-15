import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../ResuableComponents/Header/Header';
import ExplorePage from '../Pages/ExplorePage/ExplorePage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import FeedPage from '../Pages/FeedPage/FeedPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reset.scss';
import '../styles/mediaQueries.scss';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Route path='/' component={props => <Header {...props} /> }/>

      <Route exact path='/' component={props => <FeedPage {...props} /> }/>

      <Route exact path='/explore' component={props => <ExplorePage {...props} /> }/>

      <Route exact path='/:username' component={props => <ProfilePage {...props} /> }/>

    </div>
  );
}

export default App;
