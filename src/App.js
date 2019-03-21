import React, { Component } from 'react';
import Header from './components/header'
import Main from './components/main'
import orderRef from './components/firebase';
//import Main2 from './components/main2'
import Main3 from './components/main3'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      productDetail:false
    }
    this.showStore=this.showStore.bind(this);
  }

  showStore(product) {
    this.setState({
      ...this.state,
      productDetail:true
    })

  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        {/* <Main2/> */}
        {/* <Main3/> */}
      </div>
    );
  }
}

export default App;
