import React, { Component } from 'react';
import logo from './logo.svg';
// import {
//   BrowserRouter as Router, 
//   Route
// } from 'react-router-dom'; 
import './App.css';
import NavBar from './Navbar';

class App extends Component {
  render () {
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
}

export default App;
