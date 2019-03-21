import React, { Component } from 'react';
import '../App.css';
import Content from './Content.js'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Content/>
       
      </div>
    );
  }
}

export default App;
