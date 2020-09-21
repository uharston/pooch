import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <input type='text' />
            <input type='submit' value='Go'/>
          </form>
          
        </header>
    </div>
  );
}

export default App;
