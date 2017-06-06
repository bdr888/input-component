import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './components/input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Input component</h2>
        </div>
        <Input />
      </div>
    );
  }
}

export default App;
