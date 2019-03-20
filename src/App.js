import React, { Component } from 'react';
import Header from './components/header'
import Main from './components/main'
//import Main2 from './components/main2'
import Main3 from './components/main3'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        {/* <Main2/> */}
        <Main3/>
      </div>
    );
  }
}

export default App;
