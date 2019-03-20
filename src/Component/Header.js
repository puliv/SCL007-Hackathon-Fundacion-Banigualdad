import React, { Component } from 'react';
import Header from './Component/Header.js';

import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
