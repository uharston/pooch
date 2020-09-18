import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
