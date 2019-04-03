import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas name="David" age="22" belt="Brown" /> 
        <Ninjas name="Bruno" age="22" belt="Brown" /> 
      </div>
    );
  }
}

export default App;
