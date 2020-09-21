import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPageContainer from './containers/LandingPageContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <LandingPageContainer />

    </div>
  );
}

export default App;


