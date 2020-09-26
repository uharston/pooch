import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPageContainer from './containers/LandingPageContainer';
import PetsContainer from './containers/PetsContainer'


function App() {

  return (
    <Router> 
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ LandingPageContainer } />
        <Route path='/search/:breed/:state/:city/:page' render={ routerProps => <PetsContainer {...routerProps} /> } />
        
      </div>
    </Router>

  );
}

export default App;


