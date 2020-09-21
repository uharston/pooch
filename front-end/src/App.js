import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPageContainer from './containers/LandingPageContainer';
import SearchContainer from './containers/SearchContainer'

function App() {
  return (
    <Router> 
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ LandingPageContainer } />
        <Route exact path="/search" component={ SearchContainer } />
      </div>
    </Router>

  );
}

export default App;


