import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderField(field) {
    return(
      <div>
        <div>
          <label>Your Email Address</label>
          <input
            className="form-control"
            type="text"
            // {...field.input}
          />
        </div>

        <div>
          <label>Enter a Password  (4-30 characters)</label>
          <input
            className="form-control"
            type="text"
            // {...field.input}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Input component</h2>
        </div>
      </div>
    );
  }
}

export default App;
