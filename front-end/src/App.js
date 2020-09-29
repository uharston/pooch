import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPageContainer from './containers/LandingPageContainer';
import PetsContainer from './containers/PetsContainer';
import FavoritesContainer from './containers/FavoritesContainer';


function App() {

  return (
    <Router> 
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ LandingPageContainer } />
        <Route path='/search/:breed/:state/:city/:page' render={ routerProps => <PetsContainer {...routerProps} /> } />
        <Route exact path='/user/favorites' component= { FavoritesContainer } /> 
      </div>
    </Router>

  );
}

export default App;


