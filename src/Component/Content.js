import React, { Component } from 'react';
import SearchRegion from './SearchRegion';
import Main from './Main.js';

class Content extends Component {
  render() {
    return (
      <div >
       <SearchRegion/>
       <Main/>
      </div>
    );
  }
}

export default Content;