import React from 'react';
import logo from './logo-black.svg';
import './App.css';
import NavBar from './components/NavBar'
import LandingPageContainer from './containers/LandingPageContainer'

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <header className="App-header"> */}
          <img src={logo} className="App-logo" alt="logo" />
        <LandingPageContainer />
          
        {/* </header> */}
    </div>
  );
}

export default App;
