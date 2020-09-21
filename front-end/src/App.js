import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LandingPageContainer from './containers/LandingPageContainer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <LandingPageContainer />
    </div>
  );
}

export default App;
