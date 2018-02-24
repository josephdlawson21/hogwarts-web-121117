import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import ViewContainer from './ViewContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <ViewContainer />
      </div>

    )
  }
}

export default App;
